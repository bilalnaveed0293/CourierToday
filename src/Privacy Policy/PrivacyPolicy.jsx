import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';


const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Navbar */}

            {/* Header Section */}
            <div className="bg-white text-center py-16 px-4">
                <div className="container mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-black ">
                        Privacy Policy
                    </h1>
                    <p className="text-white text-sm md:text-base max-w-2xl mx-auto">
                        Goodwill Clearing and Forwarding Co. L.L.C - Protecting Your Privacy Since 1976
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                {/* Introduction */}
                <section className="mb-12 bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Introduction</h2>
                    <p className="text-gray-600 leading-relaxed">
                        This privacy policy outlines how we collect, use, and safeguard your personal
                        information when you use our services.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        By using our service, you consent to the collection and use of information as
                        described in this policy. We are committed to protecting your privacy and
                        complying with applicable data protection laws.
                    </p>
                </section>

                {/* Information We Collect */}
                <section className="mb-12 bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Information We Collect</h2>
                    <p className="text-gray-600 mb-4">To provide and enhance our services, we collect:</p>
                    <ul className="list-disc list-inside space-y-2 text-black [&>li::marker]:text-orange-600">
                        <li>Full Name</li>
                        <li>Email Address</li>
                        <li>Phone Number</li>
                        <li>Shipping And Billing Address</li>
                        <li>Delivery Details</li>
                        <li>Payment Information (Processed Securely Through Third-Party Providers)</li>
                    </ul>
                </section>

                {/* How We Use Your Information */}
                <section className="mb-12 bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
                    <ul className="list-disc list-inside space-y-2 text-black [&>li::marker]:text-orange-600">
                        <li>Providing And Maintaining Our Courier And Logistics Services</li>
                        <li>Processing And Delivering Your Shipments</li>
                        <li>Communicating With You About Your Shipments And Services</li>
                        <li>Sending Service Updates And Administrative Messages</li>
                        <li>Improving Our Services And Customer Experience</li>
                        <li>Ensuring Compliance With Customs And Regulatory Requirements</li>
                        <li>Preventing Fraud And Enhancing Security</li>
                    </ul>
                </section>

                {/* Data Protection Measures */}
                <section className="mb-12 bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Data Protection Measures</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-100 p-4 rounded">
                            <h3 className="font-bold text-gray-800 mb-2">Secure Storage</h3>
                            <p className="text-gray-600">Advanced encryption and secure data storage systems</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <h3 className="font-bold text-gray-800 mb-2">Limited Access</h3>
                            <p className="text-gray-600">Strictly controlled access to personal information</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <h3 className="font-bold text-gray-800 mb-2">Regular Updates</h3>
                            <p className="text-gray-600">Continuous security assessments and improvements</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <h3 className="font-bold text-gray-800 mb-2">Staff Training</h3>
                            <p className="text-gray-600">Ongoing privacy and security training for all staff</p>
                        </div>
                    </div>
                </section>

                {/* Your Rights */}
                <section className="mb-12 bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Your Rights</h2>
                    <p className="text-gray-600 mb-4">You have the following rights regarding your personal information:</p>
                    <ul className="list-disc list-inside space-y-2 text-black [&>li::marker]:text-orange-600">
                        <li>Access Your Personal Information</li>
                        <li>Correct Inaccurate Information</li>
                        <li>Request Deletion Of Your Information (Subject To Legal Obligations)</li>
                        <li>Object To Certain Processing Of Your Information</li>
                        <li>Receive A Copy Of Your Information In A Portable Format</li>
                        <li>Withdraw Consent Where Processing Is Based On Consent</li>
                    </ul>
                </section>

                {/* Contact Us */}
                <section className="mb-12 bg-gray-100 p-6 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
                    <p className="text-gray-600 mb-4">
                        For questions about this Privacy Policy or our data practices, please reach out:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Phone: +971 50 644 6940</li>
                    </ul>
                    <Link
                        to="/"
                        className="mt-4 inline-block text-orange-600 hover:text-orange-700 font-semibold"
                    >
                        Back to Home
                    </Link>
                </section>

                {/* Last Updated */}
                
            </div>

            {/* Footer Note */}
            
        </div>
    );
};

export default PrivacyPolicy;