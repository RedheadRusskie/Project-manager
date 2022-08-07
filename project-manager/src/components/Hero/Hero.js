import './Hero.css';

export default function Hero (props) {
  
  return (
    <div className="wrapper">
      <div className="container">
        <h2>This is a H2.</h2>
        <p>Lorem ipsum dolor sit amet. Qui repudiandae sint ea saepe nisi et error velit. Et omnis sunt hic eligendi dolores hic doloremque unde qui impedit amet 33 voluptas ratione eum numquam tenetur cum consectetur omnis</p>
        {props.children}
      </div>
    </div>
  );
}