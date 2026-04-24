import React from 'react';

const TermsOfServicePage: React.FC = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <div className="mb-12">
                    <p className="text-tech-blue font-black text-xs uppercase tracking-widest mb-4">Legal</p>
                    <h1 className="text-5xl font-black text-app-slate tracking-tighter mb-4">Terms of Service</h1>
                    <p className="text-slate-500">Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                </div>

                <div className="prose prose-slate max-w-none space-y-10 text-slate-600 leading-relaxed">

                    <section>
                        <h2 className="text-2xl font-black text-app-slate mb-3">1. Acceptance of Terms</h2>
                        <p>By accessing or using <strong>dedicinfotech.com</strong>, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services. These terms apply to all visitors, users, and students of Dedic Infotech (OPC) Pvt Ltd.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-app-slate mb-3">2. Course Enrollment & Access</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Upon successful payment, you are granted a <strong>lifetime, non-transferable</strong> license to access the purchased course content.</li>
                            <li>Course access is for personal, non-commercial use only.</li>
                            <li>You may not share your account credentials or course content with others.</li>
                            <li>We reserve the right to update, modify, or remove course content at any time to keep it current.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-app-slate mb-3">3. Payments & Refund Policy</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>All payments are processed securely through <strong>Razorpay</strong>.</li>
                            <li>Course fees are listed in Indian Rupees (INR) and are inclusive of applicable taxes.</li>
                            <li><strong>Refund Policy:</strong> Refunds are available within <strong>7 days</strong> of purchase if you have not accessed more than 20% of the course content. To request a refund, contact us at business@dedicinfotech.com.</li>
                            <li>No refunds will be issued after 7 days or if significant course content has been accessed.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-app-slate mb-3">4. Certificates</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Certificates are issued upon completion of all lessons in a course.</li>
                            <li>Certificates are issued by Dedic Infotech and are not affiliated with any government body or university.</li>
                            <li>We reserve the right to revoke certificates if fraudulent activity is detected.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-app-slate mb-3">5. Intellectual Property</h2>
                        <p>All course content, videos, materials, and resources on this platform are the intellectual property of Dedic Infotech (OPC) Pvt Ltd. You may not:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-3">
                            <li>Download, copy, reproduce, or redistribute course videos or materials.</li>
                            <li>Use course content for commercial purposes.</li>
                            <li>Share course access links or credentials with others.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-app-slate mb-3">6. User Conduct</h2>
                        <p>You agree not to:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-3">
                            <li>Use the platform for any unlawful purpose.</li>
                            <li>Attempt to gain unauthorized access to any part of the platform.</li>
                            <li>Post or transmit harmful, offensive, or misleading content.</li>
                            <li>Impersonate any person or entity.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-app-slate mb-3">7. Disclaimer of Warranties</h2>
                        <p>Our services are provided "as is" without warranties of any kind. We do not guarantee that course completion will result in employment or specific career outcomes. Results vary based on individual effort and market conditions.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-app-slate mb-3">8. Limitation of Liability</h2>
                        <p>Dedic Infotech shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for the course.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-app-slate mb-3">9. Governing Law</h2>
                        <p>These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Tirunelveli, Tamil Nadu, India.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-app-slate mb-3">10. Changes to Terms</h2>
                        <p>We reserve the right to update these Terms at any time. Continued use of the platform after changes constitutes acceptance of the new Terms.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-app-slate mb-3">11. Contact Us</h2>
                        <p>For any questions regarding these Terms, please contact:</p>
                        <ul className="list-none pl-0 space-y-1 mt-3">
                            <li><strong>Email:</strong> business@dedicinfotech.com</li>
                            <li><strong>Phone:</strong> +91 8148376909</li>
                            <li><strong>Address:</strong> 147A, West Street, Vadavoorpatti, Tirunelveli, TN, India - 627152</li>
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default TermsOfServicePage;
