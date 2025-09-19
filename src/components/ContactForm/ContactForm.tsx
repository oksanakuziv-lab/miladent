export const ContactFrom: React.FC = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className="flex flex-col gap-4"
    >
      <input
        type="hidden"
        name="form-name"
        value="contact"
      />
      <input
        name="name"
        type="text"
        placeholder="Full Name"
        className="border rounded-sm border-primary bg-transparent p-2 outline-none"
        required
      />
      <input
        name="phone"
        type="tel"
        placeholder="Phone number"
        className="border rounded-sm border-primary bg-transparent p-2 outline-none"
        required
      />
      <textarea
        name="message"
        placeholder="message"
        className="border rounded-sm border-primary bg-transparent p-2 outline-none"
        rows={3}
      />

      <button
        type="submit"
        className="w-full btn btn-outline"
      >
        Send Message
      </button>
    </form>
  );
};
