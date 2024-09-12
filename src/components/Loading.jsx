import { Oval } from "react-loader-spinner";

function Loading() {
  return (
    <div className="flex justify-center items-center">
      <Oval
        visible={true}
        height="80"
        width="80"
        strokeWidth={2}
        strokeWidthSecondary={3}
        color="#1d68f2"
        secondaryColor="#8a919e"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loading;
