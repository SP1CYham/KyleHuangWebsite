import Imag from './Imag';

export default function Carousel({ imgsToShow, imgs }: { imgsToShow: number; imgs: string[][] }) {
  //imgs is array of array of length 2 of strings
  //first array is src, second is desc
  //example: [["link", "this is my first drawing"]]
  return (
    <div>
      {imgs.map((value, index) => (
        <Imag key={index} src={value[0]} desc={value[1]}></Imag>
      ))}
      <Imag src={imgs[0][0]} desc={imgs[0][1]}></Imag>
    </div>
  );
}
