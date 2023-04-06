import axios from 'axios';

export default function Home({ data }) {
  return (
    <div>
      <h1>COVID-19 in Vietnam</h1>
      <table border={1}>
        
        <thead>
          <tr>
            <th>Ngày</th>

            <th>Đã xác nhận </th>

            <th>tích cực</th>

            <th>phục hồi</th>

            <th>tử vong</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.Date}>
              <td>{item.Date.substr(0, 10)}</td>
              <td>{item.Confirmed}</td>
              <td>{item.Active}</td>
              <td>{item.Recovered}</td>
              <td>{item.Deaths}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get(
    'https://api.covid19api.com/total/country/vietnam'
  );
  return { props: { data } };
}
<style jsx>{`
  table {
    border-collapse: collapse;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    font-size: 14px;
    min-width: 300px;
  }
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
  th {
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #f5f5f5;
  }
`}</style>
