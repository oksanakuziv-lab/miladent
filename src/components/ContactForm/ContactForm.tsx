export const ContactFrom: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      <input
        name="name"
        placeholder="Full Name"
        className="border rounded-sm border-gray-400 bg-transparent p-2 outline-none"
      />
      <input
        type="tel"
        placeholder="Phone number"
        className="border rounded-sm border-gray-400 bg-transparent p-2 outline-none"
      />
      <textarea
        placeholder="message"
        className="border rounded-sm border-gray-400 bg-transparent p-2 outline-none"
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
