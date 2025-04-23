import { FC } from "react";

export const NoData: FC = () => {
  return (
    <div className="mt-10 flex justify-center h-full">
      <h1 className="text-2xl font-bold text-slate-50">
        🙇‍♀️データが見つかりませんでした。🙇‍♀️
      </h1>
    </div>
  );
};
