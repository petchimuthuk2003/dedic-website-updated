import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, ArrowLeft, Award } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';

interface Enrollment {
    course_name: string;
    certificate_id: string;
    completed_at: string;
}

const CertificatePage: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { user, loading } = useAuth();
    const navigate = useNavigate();
    const [enrollment, setEnrollment] = useState<Enrollment | null>(null);
    const [studentName, setStudentName] = useState('');

    useEffect(() => {
        if (!loading && !user) navigate('/login');
    }, [user, loading]);

    useEffect(() => {
        if (!user) return;
        Promise.all([
            supabase.from('enrollments').select('course_name, certificate_id, completed_at').eq('user_id', user.id).not('completed_at', 'is', null).single(),
            supabase.from('profiles').select('full_name').eq('id', user.id).single(),
        ]).then(([{ data: enroll }, { data: profile }]) => {
            if (!enroll) { navigate('/dashboard'); return; }
            setEnrollment(enroll);
            setStudentName(profile?.full_name || user.user_metadata?.full_name || 'Student');
        });
    }, [user]);

    useEffect(() => {
        if (!enrollment || !studentName || !canvasRef.current) return;
        drawCertificate(canvasRef.current, studentName, enrollment);
    }, [enrollment, studentName]);

    const drawCertificate = (canvas: HTMLCanvasElement, name: string, enroll: Enrollment) => {
        const W = 1200, H = 850;
        canvas.width = W;
        canvas.height = H;
        const ctx = canvas.getContext('2d')!;

        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, W, H);

        // Outer border
        ctx.strokeStyle = '#2563EB';
        ctx.lineWidth = 12;
        ctx.strokeRect(24, 24, W - 48, H - 48);

        // Inner border
        ctx.strokeStyle = '#BFDBFE';
        ctx.lineWidth = 3;
        ctx.strokeRect(40, 40, W - 80, H - 80);

        // Top blue band
        ctx.fillStyle = '#1E3A8A';
        ctx.fillRect(24, 24, W - 48, 110);

        // Company name in band
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 36px Georgia, serif';
        ctx.textAlign = 'center';
        ctx.fillText('DEDIC INFOTECH', W / 2, 95);

        // Award icon area
        ctx.fillStyle = '#DBEAFE';
        ctx.beginPath();
        ctx.arc(W / 2, 200, 55, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#2563EB';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Star/medal symbol
        ctx.fillStyle = '#2563EB';
        ctx.font = '52px serif';
        ctx.textAlign = 'center';
        ctx.fillText('★', W / 2, 218);

        // Certificate of Completion
        ctx.fillStyle = '#1E3A8A';
        ctx.font = 'bold 48px Georgia, serif';
        ctx.textAlign = 'center';
        ctx.fillText('Certificate of Completion', W / 2, 310);

        // Divider line
        ctx.strokeStyle = '#2563EB';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(200, 335); ctx.lineTo(W - 200, 335);
        ctx.stroke();

        // "This is to certify that"
        ctx.fillStyle = '#64748B';
        ctx.font = '22px Georgia, serif';
        ctx.fillText('This is to certify that', W / 2, 385);

        // Student Name
        ctx.fillStyle = '#1E3A8A';
        ctx.font = 'bold 58px Georgia, serif';
        ctx.fillText(name, W / 2, 460);

        // Underline name
        const nameWidth = ctx.measureText(name).width;
        ctx.strokeStyle = '#2563EB';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(W / 2 - nameWidth / 2, 472);
        ctx.lineTo(W / 2 + nameWidth / 2, 472);
        ctx.stroke();

        // "has successfully completed"
        ctx.fillStyle = '#64748B';
        ctx.font = '22px Georgia, serif';
        ctx.fillText('has successfully completed the course', W / 2, 520);

        // Course Name
        ctx.fillStyle = '#2563EB';
        ctx.font = 'bold 30px Georgia, serif';
        ctx.fillText(enroll.course_name, W / 2, 570);

        // Bottom section divider
        ctx.strokeStyle = '#E2E8F0';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(100, 620); ctx.lineTo(W - 100, 620);
        ctx.stroke();

        // Date & Certificate ID
        const completedDate = new Date(enroll.completed_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
        ctx.fillStyle = '#94A3B8';
        ctx.font = '16px Georgia, serif';
        ctx.textAlign = 'left';
        ctx.fillText(`Date: ${completedDate}`, 120, 660);
        ctx.textAlign = 'right';
        ctx.fillText(`Certificate ID: ${enroll.certificate_id}`, W - 120, 660);

        // Signature line
        ctx.strokeStyle = '#CBD5E1';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(W / 2 - 120, 760); ctx.lineTo(W / 2 + 120, 760);
        ctx.stroke();
        ctx.fillStyle = '#475569';
        ctx.font = 'bold 18px Georgia, serif';
        ctx.textAlign = 'center';
        ctx.fillText('Authorized Signature', W / 2, 785);
        ctx.fillStyle = '#94A3B8';
        ctx.font = '14px Georgia, serif';
        ctx.fillText('Dedic Infotech', W / 2, 808);
    };

    const handleDownload = () => {
        if (!canvasRef.current || !studentName) return;
        const link = document.createElement('a');
        link.download = `Dedic-Certificate-${studentName.replace(/\s+/g, '-')}.png`;
        link.href = canvasRef.current.toDataURL('image/png');
        link.click();
    };

    if (loading || !enrollment) return (
        <div className="min-h-screen flex items-center justify-center">
            <span className="w-8 h-8 border-4 border-tech-blue/30 border-t-tech-blue rounded-full animate-spin"></span>
        </div>
    );

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50">
            <div className="container mx-auto max-w-5xl">
                <button onClick={() => navigate('/dashboard?tab=certificates')} className="flex items-center gap-2 text-slate-500 hover:text-tech-blue font-semibold mb-8 transition-colors group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
                </button>

                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-sm mb-4">
                        <Award size={16} /> Course Completed!
                    </div>
                    <h1 className="text-4xl font-black text-app-slate mb-2">Your Certificate</h1>
                    <p className="text-slate-500">Certificate ID: <span className="font-mono font-bold text-tech-blue">{enrollment.certificate_id}</span></p>
                </div>

                {/* Certificate Preview */}
                <div className="bg-white rounded-3xl shadow-2xl p-4 mb-8 overflow-x-auto">
                    <canvas ref={canvasRef} className="w-full h-auto rounded-xl" style={{ maxWidth: '100%' }} />
                </div>

                <div className="flex justify-center">
                    <button onClick={handleDownload} className="flex items-center gap-3 px-10 py-4 bg-tech-blue text-white font-black rounded-2xl shadow-xl shadow-tech-blue/30 hover:bg-blue-700 transition-all text-lg">
                        <Download size={22} /> Download Certificate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CertificatePage;
