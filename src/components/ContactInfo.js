const Contact = (props) => {
  return (
    <div
      className="absolute top-0 left-0 right-0 bottom-0 bg-gray-400 bg-opacity-40 backdrop-blur-md transition"
      onClick={() => props.setShowModal(false)}
    >
      <main className="justify-center items-center min-h-screen p-8 flex">
        <div className="flex z-[9999] group bg-gradient-to-tr from-purple-600 to-orange-400 text-white overflow-hidden rounded-2xl shadow hover:shadow-md transition h-[12rem] p-[0.2rem]">
          <figure className="max-h-64 aspect-square overflow-hidden justify-center align-middle items-center flex">
            <img
              className="w-full h-full object-cover transition group-hover:scale-125"
              src="/assets/Sparsh.jpeg"
              alt="Card Background"
            />
          </figure>
          <div className="p-4">
            <h3 className="text-xl font-bold">Sparsh Mehta</h3>
            <p className="font-serif">Contact Me</p>
          </div>
          <div className="flex gap-2 px-4 justify-center">
            <button
              className="text-blue-600 text-lg hover:text-green-400"
              onClick={() => {
                window.location.href = "mailto:mehtasparsh777@gmail.com";
                props.setShowModal(false);
              }}
            >
              Mail
            </button>
            <button
              className="text-blue-600 text-lg hover:text-green-400"
              onClick={() => {
                window.location.href = "tel:+91702726441";
                props.setShowModal(false);
              }}
            >
              Call
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
