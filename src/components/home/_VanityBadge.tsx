interface VanityBadgeProps {
  badge?: "longest" | "blaze" | "four" | "zero" | "general";
}

const vanityBadges = [
  {
    id: "longest",
    text: "🚜 Longest road",
    color: "#FF4D00",
    borderColor: "#FFE8BC",
    backgroundColor: "#FEF5EA"
  },
  {
    id: "blaze",
    text: "🌿 420 Blaze It",
    color: "#0C8911",
    borderColor: "#C2E7D0",
    backgroundColor: "#EEFBF1"
  },
  {
    id: "four",
    text: "🏇 Four Horsemen",
    color: "#996F01",
    borderColor: "#E2E0CD",
    backgroundColor: "#F7F6F1"
  },
  {
    id: "zero",
    text: "🧊 Zero Proof",
    color: "#0047FF",
    borderColor: "#D0D9F8",
    backgroundColor: "#EFF4FF"
  },
  {
    id: "general",
    text: "✨ Four Star General",
    color: "#9E62FF",
    borderColor: "#E9D8FD",
    backgroundColor: "#FEF4FF"
  }
];

const _: React.FC<VanityBadgeProps> = ({ badge }) => {
  const vanityBadge = vanityBadges.find(b => b.id === badge);
  return vanityBadge ? (
    <div
      className="whitespace-nowrap rounded-[6px] border px-2 pb-0.5 pt-1 text-sm"
      style={{
        color: vanityBadge.color,
        borderColor: vanityBadge.borderColor,
        backgroundColor: vanityBadge.backgroundColor
      }}
    >
      {vanityBadge.text}
    </div>
  ) : null;
};

export default _;
