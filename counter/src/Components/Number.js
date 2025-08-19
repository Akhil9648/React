export default function Number({ num, increment, decrement, reset }) {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-center font-80px">
        <h1 style={{ fontSize: "20em" }}>{num}</h1>
      </div>
      <div
        className="col-6 mt-5 mb-3"
        style={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        <button
          type="button"
          className="btn btn-success btn-lg"
          onClick={decrement}
        >
          -
        </button>
        <button type="button" className="btn btn-danger btn-lg" onClick={reset}>
          Reset
        </button>
        <button
          type="button"
          className="btn btn-warning btn-lg"
          onClick={increment}
        >
          +
        </button>
      </div>
    </>
  );
}
