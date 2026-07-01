import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Clock,
  CircleHelp,
  MessageCircle,
} from "lucide-react";

function Help() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
            <CircleHelp className="text-blue-600" size={40} />
            Help & Support
          </h1>
          <p className="text-gray-600 mt-3">
            Need assistance? We're here to help. You can contact us using any
            of the details below.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
            <Phone className="text-green-600" size={32} />
            <div>
              <h2 className="font-semibold text-lg">Phone</h2>
              <p className="text-gray-600">+92 300 1234567</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
            <Mail className="text-red-500" size={32} />
            <div>
              <h2 className="font-semibold text-lg">Email</h2>
              <p className="text-gray-600">support@lms.com</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
            <Globe className="text-blue-600" size={32} />
            <div>
              <h2 className="font-semibold text-lg">Website</h2>
              <p className="text-gray-600">www.lms.com</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
            <MapPin className="text-orange-500" size={32} />
            <div>
              <h2 className="font-semibold text-lg">Office Address</h2>
              <p className="text-gray-600">
                Main Campus, Lahore, Pakistan
              </p>
            </div>
          </div>
        </div>

        {/* Support Hours */}
        <div className="bg-white rounded-xl shadow p-6 mt-8">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="text-purple-600" size={30} />
            <h2 className="text-2xl font-semibold">Support Hours</h2>
          </div>

          <p className="text-gray-700">
            Monday - Friday: <strong>9:00 AM - 6:00 PM</strong>
          </p>

          <p className="text-gray-700">
            Saturday: <strong>10:00 AM - 2:00 PM</strong>
          </p>

          <p className="text-gray-700">
            Sunday: <strong>Closed</strong>
          </p>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-xl shadow p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">
            <div>
              <h3 className="font-semibold">
                How do I add a new student?
              </h3>
              <p className="text-gray-600">
                Navigate to Students → Add Student and fill in the required
                information.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                How can I edit student information?
              </h3>
              <p className="text-gray-600">
                Open the Students page, select a student, and click the Edit
                button.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                I forgot my password.
              </h3>
              <p className="text-gray-600">
                Use the password reset option on the login page or contact
                support.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-blue-600 text-white rounded-xl shadow p-8 mt-8 text-center">
          <MessageCircle size={42} className="mx-auto mb-4" />

          <h2 className="text-3xl font-bold mb-2">
            Still Need Help?
          </h2>

          <p className="mb-5">
            Our support team is happy to assist you with any issue.
          </p>

          <a
            href="mailto:support@lms.com"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}

export default Help;