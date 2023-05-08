import { ScatterChart, Scatter, XAxis, 
    YAxis, CartesianGrid } from 'recharts';
  
export const App = () => {
  
    // Sample data
    const data = []
    const gerarCirculo = (xCentro, yCentro, raio) => {
      for(let x = xCentro-raio; x<=raio*2; x++){
        for(let y = yCentro-raio; y<=raio*2; y++){
          if(x*x + y*y - 2*xCentro*x - 2*yCentro*y + xCentro*xCentro + yCentro*yCentro - raio*raio == 0){
            data.push({ x: x, y: y })
          }
        }
      }
      return data
    }
  
    return (
        <ScatterChart width={400} height={400}>
            <CartesianGrid />
            <XAxis type="number" dataKey="x" />
            <YAxis type="number" dataKey="y" />
            <Scatter data={gerarCirculo(0, 0, 50)} fill="red" />
            <Scatter data={[{x: 0, y: 0}]} fill="blue" />
        </ScatterChart>
    );
}