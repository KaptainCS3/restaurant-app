 const Card = (props) => {
  // const cartArray = ["pexels-nishant-aneja-2955819.jpg","pexels-rajesh-tp-1633578.jpg"];
  return (
    // <div class="flex justify-start">
    //   <div class="rounded-lg shadow-lg bg-white max-w-sm">
    //     <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
    //       <img
    //         class="rounded-t-lg"
    //         src={require(`../../assets/${props.img}`)}
    //         alt=""
    //       />
    //     </a>
    //     <div class="p-6">
    //       <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
    //       <p class="text-gray-700 text-base mb-4">
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </p>
    //       <button
    //         type="button"
    //         class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    //       >
    //         Button
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div class="flex justify-evenly">
      <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <img
          class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={require(`../../assets/${props.img}`)}
          alt=""
        />
        <div class="p-6 flex flex-col justify-start">
          <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
          <p class="text-gray-700 text-base mb-4">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
