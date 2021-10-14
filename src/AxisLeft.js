import "./styles.css";

export const AxisLeft = ({ yScale }) => {
  return yScale.domain().map((tickValue) => (
    <g key={tickValue}>
      <text
        className="tick"
        style={{ textAnchor: "end" }}
        dx="-0.3em"
        dy=".32em"
        y={yScale(tickValue) + yScale.bandwidth() / 2}
      >
        {tickValue}
      </text>
    </g>
  ));
};
