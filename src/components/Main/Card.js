 const Card = (props) => {
  const card = {
    marginRight: 40,
    marginTop: 50,
    minWidth: "35%"
  }
  // const cartArray = ["pexels-nishant-aneja-2955819.jpg","pexels-rajesh-tp-1633578.jpg"];
  return (
    <div class="flex justify-evenly" style={card}>
      <div class="flex flex-rows md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <img
          class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={require(`../../assets/food_features/${props.img}`)}
          alt=""
        />
        <div class="p-6 flex flex-col justify-evenly">
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
