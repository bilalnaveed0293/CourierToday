import React, { useEffect } from 'react';
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
                    <p className="text-gray-600 leading-relaxed">
                        Copyright © 2025 UAE Couriers operating Under Goodwill Clearing & Forwarding Co. L.L.C - All Rights Reserved.<br /><br />

                        Goodwill Clearing and Forwarding Co. L.L.C - Privacy Policy<br /><br />

                        Goodwill Clearing and Forwarding Co. L.L.C operates the WEBSITE:
                        <a href="http://courier-today.com" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer"> http://courier-today.com</a><br /><br />

                        This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.<br /><br />

                        We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.
                    </p>

                </section>

                {/* Information We Collect */}
                <section className="mb-12 bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Information Collection and Use</h2>
                    <p className="text-gray-600 mb-4">We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Types of Data Collected</h2>
                    <p className="text-gray-600 mb-4">Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
                    <ul className="list-disc list-inside space-y-2 text-black [&>li::marker]:text-orange-600">
                        <li>Name</li>
                        <li>Email Address</li>
                        <li>Phone Number</li>
                        <li>Address</li>
                    </ul>
                </section>

                {/* How We Use Your Information */}
                <section className="mb-12 bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Use of Data</h2>
                    <p className="text-gray-600 mb-4">We use the collected data for various purposes:</p>
                    <ul className="list-disc list-inside space-y-2 text-black [&>li::marker]:text-orange-600">
                        <li>To provide and maintain our Service.</li>
                        <li>To notify you about changes to our Service.</li>
                        <li>To allow you to participate in interactive features of our Service when you choose to do so.</li>
                        <li>To provide customer support.</li>
                        <li>To gather analysis or valuable information so that we can improve our Service.</li>
                        <li>To monitor the usage of our Service.</li>
                        <li>To detect, prevent and address technical issues.</li>

                    </ul>
                </section>
                <section className="mb-12 bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"> Limit data Retention </h2>
                    <p className="text-gray-600 mb-4">
                        Only collect and retain customer information for as long as necessary to provide our services.
                    </p>
                </section>

                {/* Contact Us */}
                <section className="mb-12 bg-gray-100 p-6 rounded-lg">

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