export default function ConnectCard() {
    return (
      <div className="bg-white p-4 shadow-md rounded-lg">
        <p className="text-sm font-semibold text-gray-800">Let&apos;s Connect!</p>
        <div className="mt-2 space-y-1">
          <a href="mailto:harpreet.singh@crossml.com" className="text-blue-600 hover:underline block">harpreet.singh@crossml.com</a>
          <a href="https://www.linkedin.com/in/harpreet-singh-saini-24a4a6296/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block">LinkedIn</a>
        </div>
      </div>
    );
}