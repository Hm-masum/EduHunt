import Image from "next/image";
import bg from "../../../assets/bg.jpg";
import Link from "next/link";
import { getMe } from "@/services/AuthService";

const ProfileInfo = async () => {
  const userData = await getMe();
  console.log(userData);

  return (
    <div className="flex justify-center items-center h-[70vh] md:h-[80vh]">
      <div className="bg-white dark:bg-black shadow-lg dark:shadow-gray-700 rounded-2xl w-full md:w-4/5 lg:w-3/5">
        <Image src={bg} className="w-full mb-4 rounded-t-lg h-36" alt="bg" />

        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <div className="relative block">
            <Image
              alt="profile"
              width={10}
              height={10}
              src={userData?.data?.image || bg}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </div>

          <p className="py-2 uppercase font-title font-medium px-4 text-xs text-white bg-purple-800 rounded-full">
            {userData?.data?.role || "N/A"}
          </p>

          <div className="w-full p-2 mt-2 rounded-lg">
            <div className="text-sm space-y-1 text-center text-gray-600 dark:text-gray-100">
              <p>
                <span className="font-semibold">Name : </span>
                {userData?.data?.name || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Email : </span>
                {userData?.data?.email || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Mobile : </span>
                {userData?.data?.phone || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Thana : </span>
                {userData?.data?.thana || "N/A"}
              </p>
              <p>
                <span className="font-semibold">District : </span>
                {userData?.data?.district || "N/A"}
              </p>
              <button className="py-2 uppercase px-4 text-xs text-white bg-purple-700 rounded-full font-title font-medium">
                <Link href={`/dashboard/update-profile`}> Update</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
