import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <div className="mb-12">
                    <p className="text-tech-blue font-black text-xs uppercase tracking-widest mb-4">Legal</p>
                    <h1 className="text-5xl font-black text-app-slate tracking-tighter mb-4">Privacy Policy</h1>
                    <p className="text-slate-500">Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                </div>

                <div className="prose prose-slate max-w-none space-y-10 text-slate-600 leading-relaxed">

                    <section>
                        <h2 className="text-2xl font-black text-app-slate mb-3">1. Introduction</h2>
                        <p>Dedic Infotech (OPC) Pvt Ltd ("we", "our", "us") operates <strong>dedicinfotech.com</strong>. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-app-slate mb-3">2. Information We Collect</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Account Information:</strong> Name, email address, and profile picture collected via Google OAuth login.</li>
                            <li><strong>Contact Information:</strong> Phone number, location, and address provided by you in your profile or during checkout.</li>
                            <li><strong>Payment Information:</strong> Payment transactions are processed by Razorpay. We do not store your card or banking details.</li>
                            <li><strong>Usage Data:</strong> Course progress, completed lessons, and enrollment records.</li>
                            <li><strong>Contact Form Data:</strong> Name, email, phone, subject, and message submitted via our contact form.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-app-slate mb-3">3. How We Use Your Information</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To provide and manage your course access and enrollment.</li>
                            <li>To process payments and issue certificates of completion.</li>
                            <li>To communicate with you about your courses, updates, and support.</li>
                            <li>To respond to your contact form inquiries.</li>
                            <li>To improve our website and services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-app-slate mb-3">4. Data Storage & Security</h2>
                        <p>Your data is stored securely using <strong>Supabase</strong>, which is hosted on AWS infrastructure. We implement industry-standard security measures including Row Level Security (RLS) to ensure only you can access your personal data. Payments are secured by <strong>Razorpay</strong>'s PCI-DSS compliant infrastructure.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-app-slate mb-3">5. Third-Party Services</h2>
                        <p>We use the following third-party services:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Google OAuth</strong> — for authentication</li>
                            <li><strong>Supabase</strong> — for database and authentication</li>
                            <li><strong>Razorpay</strong> — for payment processing</li>
                            <li><strong>EmailJS</strong> — for contact form email delivery</li>
                            <li><strong>Google Drive</strong> — for course video hosting</li>
                        </ul>
                        <p className="mt-3">Each of these services has their own privacy policies governing their use of your data.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-app-slate mb-3">6. Cookies</h2>
                        <p>We use session cookies to maintain your login state. We do not use tracking or advertising cookies.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-app-slate mb-3">7. Your Rights</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Access and update your personal information via your Dashboard.</li>
                            <li>Request deletion of your account and data by contacting us.</li>
                            <li>Opt out of marketing communications at any time.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-app-slate mb-3">8. Children's Privacy</h2>
                        <p>Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-app-slate mb-3">9. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us:</p>
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

export default PrivacyPolicyPage;
