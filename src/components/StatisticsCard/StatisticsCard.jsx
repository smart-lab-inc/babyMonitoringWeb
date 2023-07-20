const StatisticsCard = ({ Chart, title, onClick }) => {

  return (
    <div className="rounded-lg shadow-md p-4 m-4 w-full  flex flex-col items-center justify-center" onClick={onClick}>
      <div className="flex flex-row items-center justify-start w-full align-middle">
        <p>{title}</p>
      </div>
      {Chart}
    </div>
  )
};

export default StatisticsCard;