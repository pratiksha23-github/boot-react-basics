import React, { useState, useEffect } from "react";

function HomePage() {
  const [number, setNumber] = useState(0);

  //ComponentDidMount
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  //ComponentDidUpdate
  useEffect(() => {
    console.log("Number Updated");
  }, [number]);

  //ComponentDidUnmount
  useEffect(() => {
    return () => console.log("Component Unmounted");
  });

  return (
    <>
      <div
        style={{
          color: "green",
          fontSize: "20px",
          backgroundColor: "yellow",
        }}
      >
        <h1>Welcome to Home Page!</h1>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
          repudiandae in ex dolores debitis, non tempora tenetur, voluptatum eum
          perspiciatis totam corporis placeat aspernatur laboriosam rem eius
          quibusdam dicta delectus molestias officiis obcaecati odit dolore
          recusandae id! Eos, architecto dolore. Odio impedit nesciunt qui
          libero assumenda dignissimos tempore porro, omnis dolorem perspiciatis
          aperiam mollitia eaque, aspernatur molestias nostrum soluta blanditiis
          dolor voluptate enim eos distinctio eum culpa. Dolor ratione laborum,
          nobis voluptatibus alias labore autem facere? Deserunt sequi possimus
          cupiditate minus animi nulla tempora repudiandae quae, nostrum ut
          itaque vero earum omnis maxime amet rerum praesentium voluptates, ab
          adipisci magni voluptatum veritatis facere temporibus quidem. Iusto
          velit sequi odit enim vitae nesciunt repudiandae neque? Laudantium
          dolores unde amet in ad accusantium velit odio autem suscipit ullam!
          Maiores dolorum eius quia dolor ea quam sed debitis dolorem eveniet
          vero voluptates laborum beatae enim, eum fugit officiis similique
          neque. Fuga, deleniti laborum reprehenderit temporibus odit
          accusantium quos iusto quae sequi aliquid quo aperiam voluptatem
          pariatur autem nostrum, numquam error cumque maiores veritatis
          repudiandae repellat praesentium sint id recusandae! Eveniet, iste
          odio itaque quis fugit cupiditate, voluptates aliquam dolorum vitae
          doloribus eligendi! Facere sunt vel quae quod harum! Commodi
          cupiditate accusantium sint saepe.
        </p>
        <h1 style={{ textAlign: "center" }}>{number}</h1>
        <button onClick={() => setNumber((prev) => prev + 1)}>
          Click Me to add 1
        </button>
      </div>
    </>
  );
}
export default HomePage;
