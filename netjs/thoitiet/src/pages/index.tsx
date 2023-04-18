import React from 'react';
import axios from 'axios';
export async function getStaticProps() {
 const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}');

  const data = res.data;
  return {
    props: {
      data,
    },
  };
}
export default function HomePage({ data }) {
  const { main, weather } = data;
 
  return (
    <div>
      <h1>Thời tiết tại Hà Nội</h1>
      <p>Nhiệt độ hiện tại: {main.temp}°C</p>
      <p>Độ ẩm: {main.humidity}%</p>
      <p>Mô tả thời tiết: {weather[0].description}</p>
    </div>
  );
}





