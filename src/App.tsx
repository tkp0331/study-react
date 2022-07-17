import "./styles.css";

const NoMean = undefined;

export default function App() {
  const hoge = <strong>hoge</strong>;
  return (
    <div>
      {Array(3)
        .fill(NoMean)
        .map((_) => hoge)}
    </div>
  );
}
