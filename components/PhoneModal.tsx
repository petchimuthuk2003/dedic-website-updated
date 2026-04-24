import React, { useState } from 'react';
import { Smartphone } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

interface Props {
    onClose: () => void;
}

const PhoneModal: React.FC<Props> = ({ onClose }) => {
    const { user } = useAuth();
    const [phone, setPhone] = useState('');
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');

    const handleSave = async () => {
        if (!phone.trim() || phone.trim().length < 10) { setError('Enter a valid phone number'); return; }
        if (!user) return;
        setSaving(true);
        const { error: err } = await supabase.from('profiles').upsert({
            id: user.id,
            phone: phone.trim(),
            full_name: user.user_metadata?.full_name || '',
            email: user.email || '',
            updated_at: new Date().toISOString(),
        });
        setSaving(false);
        if (err) { setError('Failed to save. Try again.'); return; }
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
                <div className="w-14 h-14 rounded-2xl bg-tech-blue/10 flex items-center justify-center text-tech-blue mb-6">
                    <Smartphone size={28} />
                </div>

                <h2 className="text-2xl font-black text-app-slate mb-2">One last thing!</h2>
                <p className="text-slate-500 mb-6">Add your mobile number so we can reach you about your courses and updates.</p>

                <div className="space-y-4">
                    <input
                        type="tel"
                        value={phone}
                        onChange={e => { setPhone(e.target.value); setError(''); }}
                        onKeyDown={e => e.key === 'Enter' && handleSave()}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none font-medium text-slate-800 placeholder:text-slate-400"
                        autoFocus
                    />
                    {error && <p className="text-red-500 text-sm font-bold">{error}</p>}

                    <button onClick={handleSave} disabled={saving}
                        className="w-full py-4 bg-tech-blue text-white font-black rounded-xl hover:bg-blue-700 transition-all disabled:opacity-70">
                        {saving ? 'Saving...' : 'Save & Continue'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PhoneModal;
