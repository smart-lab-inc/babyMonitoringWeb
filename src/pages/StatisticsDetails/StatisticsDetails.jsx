import Navbar from "../../components/NavBar/NavBar";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getStatistics } from "../../api/services/sensorData";
import { getStartAndEndHour } from "../../utils/date";
import Spinner from "../../components/Spinner/Spinner";
import measures from "../../consts/measures";

const StatisticsDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { startTimeStamp, endTimeStamp } = getStartAndEndHour();

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  const fetchData = async () => {
    const response = await getStatistics(id, "", startTimeStamp, endTimeStamp);

    setData(response.data.data);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold">Estadísticas</h1>

        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="flex flex-row items-center justify-center">
              <p className="font-semibold">Monitor: </p>
              <p className="text-gray-500">{id}</p>
            </div>
            <div className="flex-col items-center justify-center w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center pb-16">
              {data &&
                Object.keys(data).map((key) => {
                  if (Object.keys(data[key]).length !== 0) {
                    return (
                      <>
                        <div className="flex flex-col  justify-center border-2 border-gray-300 rounded-lg shadow-lg p-4 m-4 w-full">
                          <p className="text-2xl font-semibold">
                            {measures[key]}
                          </p>

                          {Object.keys(data[key]).map((key2) => {
                            return (
                              <>
                                <div className="flex flex-wrap items-center justify-between">
                                  <p className="text-lg font-semibold">
                                    {measures[key2]}
                                  </p>
                                  <p className="text-lg text-gray-500">
                                    {data[key][key2]}
                                  </p>
                                </div>
                              </>
                            );
                          })}
                        </div>
                      </>
                    );
                  }
                })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default StatisticsDetails;
