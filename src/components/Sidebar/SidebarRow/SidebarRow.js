import "./SidebarRow.scss";

const SidebarRow = ({ Icon, title, selected }) => {
  return (
    <div className={`sidebarRow ${selected ? "selected" : ""}`}>
      <Icon className="sidebarRow__icon" />
      <p className="sidebarRow__title">{title}</p>
    </div>
  );
};

export default SidebarRow;
