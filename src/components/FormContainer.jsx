import React, { useState } from 'react';
import SuccessState from './SuccessState';

export default function FormContainer({
  formType = 'registration',
  selectedTrack = '',
  title = 'Register Your Interest',
  subtitle = 'Please provide your details below. The IRSA Secretariat will connect with you.',
  successTitle,
  successMessage,
  successSubtext
}) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    organisation: '',
    designation: '',
    email: '',
    phone: '',
    category: selectedTrack || 'General Interest',
    projectSummary: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <SuccessState
        title={successTitle || (
          formType === 'awards' 
            ? 'Nomination Registered' 
            : formType === 'contact' 
              ? 'Enquiry Submitted'
              : 'Interest Registered'
        )}
        message={successMessage || (
          formType === 'awards'
            ? 'Thank you for submitting your nomination. Your application has been logged for review.'
            : formType === 'contact'
              ? 'Thank you for contacting the IRSA Secretariat. We will respond to your enquiry shortly.'
              : 'Thank you for your interest in IRSA. Our secretariat will connect with you regarding participation details.'
        )}
        subtext={successSubtext || 'Note: This frontend prototype registers your interest. The IRSA Secretariat will follow up regarding next steps.'}
        onReset={() => setSubmitted(false)}
      />
    );
  }

  return (
    <div className="bg-white space-y-6">
      
      <div className="border-b border-neutral-200 pb-4">
        <span className="eyebrow-label text-xs">
          {formType.toUpperCase()}
        </span>
        <h3 className="section-heading mt-2">
          {title}
        </h3>
        {subtitle && (
          <p className="body-copy text-sm mt-1">
            {subtitle}
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-800">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Dr. Rajesh Kumar"
              className="w-full bg-white border border-neutral-300 rounded-md p-3 text-sm text-[#111111] focus:border-[#111111] focus:outline-none transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-800">
              Organisation <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="organisation"
              required
              value={formData.organisation}
              onChange={handleChange}
              placeholder="e.g. Ministry / Automotive OEM / NGO"
              className="w-full bg-white border border-neutral-300 rounded-md p-3 text-sm text-[#111111] focus:border-[#111111] focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-800">
              Designation
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="e.g. Director / Head of CSR"
              className="w-full bg-white border border-neutral-300 rounded-md p-3 text-sm text-[#111111] focus:border-[#111111] focus:outline-none transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-800">
              Work Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@organisation.com"
              className="w-full bg-white border border-neutral-300 rounded-md p-3 text-sm text-[#111111] focus:border-[#111111] focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-800">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className="w-full bg-white border border-neutral-300 rounded-md p-3 text-sm text-[#111111] focus:border-[#111111] focus:outline-none transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-800">
              Area of Interest
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-white border border-neutral-300 rounded-md p-3 text-sm text-[#111111] focus:border-[#111111] focus:outline-none transition-colors"
            >
              {formType === 'contact' ? (
                <>
                  <option value="Convention Attendance">Attending the Convention</option>
                  <option value="Alliance Membership">Alliance Membership</option>
                  <option value="Awards Nomination">Awards Nomination</option>
                  <option value="Exhibition / Partnership">Exhibition or Partnership</option>
                  <option value="General Enquiry">General Institutional Enquiry</option>
                </>
              ) : formType === 'awards' ? (
                <>
                  <option value="Road Safety Leadership — Automotive & Mobility">01 Road Safety Leadership — Automotive &amp; Mobility</option>
                  <option value="Responsible Mobility & Behaviour Change">02 Responsible Mobility &amp; Behaviour Change</option>
                  <option value="CSR Impact — Road Safety">03 CSR Impact — Road Safety</option>
                  <option value="Safe Mobility Innovation — Solutions That Can Scale">04 Safe Mobility Innovation — Solutions That Can Scale</option>
                </>
              ) : (
                <>
                  <option value="Founding Member">Founding Member (Alliance Leadership)</option>
                  <option value="Strategic Member">Strategic Member (Corporate / Industry)</option>
                  <option value="Associate Member">Associate Member (Ecosystem Partner)</option>
                  <option value="Government & NGOs">Government &amp; Non-Profit (Public Interest)</option>
                  <option value="Case Study Showcase">Case Study Showcase</option>
                  <option value="Startup Bootcamp">Startup Bootcamp</option>
                  <option value="Student Programme">Student Programme &amp; Olympiad</option>
                  <option value="General Delegate">General Delegate</option>
                </>
              )}
            </select>
          </div>
        </div>

        {formType === 'awards' && (
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-800">
              Project Summary &amp; Measurable Outcomes <span className="text-red-600">*</span>
            </label>
            <textarea
              name="projectSummary"
              rows={4}
              required
              value={formData.projectSummary}
              onChange={handleChange}
              placeholder="Briefly describe the initiative, target demographic, and verifiable safety impact..."
              className="w-full bg-white border border-neutral-300 rounded-md p-3 text-sm text-[#111111] focus:border-[#111111] focus:outline-none transition-colors"
            />
          </div>
        )}

        <div className="space-y-1.5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-800">
            Message or Specific Query (Optional)
          </label>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Share any additional requirements or background..."
            className="w-full bg-white border border-neutral-300 rounded-md p-3 text-sm text-[#111111] focus:border-[#111111] focus:outline-none transition-colors"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-md font-semibold text-sm bg-[#FFC629] text-[#111111] hover:bg-[#EBB21E] transition-colors shadow-sm cursor-pointer"
          >
            Submit Registration
          </button>
        </div>

        <p className="text-xs text-neutral-500 text-center pt-1">
          Note: This form registers your interest with the IRSA Secretariat. No online payment is required.
        </p>

      </form>
    </div>
  );
}
