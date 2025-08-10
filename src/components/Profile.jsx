import React, { useContext, useEffect } from "react";
import { userStore } from "../utils/UserContext";

const Profile = () => {
     const {
          getUser,
          profile,
          handleProfile,
          isEditing,
          setIsEditing,
          handleChange,
     } = useContext(userStore);

     useEffect(() => {
          getUser();
     }, []);

     return (
          <div className="max-w-4xl mx-auto mt-12 px-6">
               <h1 className="text-3xl font-semibold mb-8 text-gray-900">
                    Your Profile
               </h1>

               <div className="bg-white shadow-md rounded-md border border-gray-300 p-8">
                    <section className="mb-10">
                         <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
                              Profile Summary
                         </h2>
                         <div className="grid grid-cols-2 gap-y-3 gap-x-8 text-gray-700 text-base">
                              <div>
                                   <p className="font-semibold">Name</p>
                                   <p>{profile.name || "Not set"}</p>
                              </div>
                              <div>
                                   <p className="font-semibold">Mobile</p>
                                   <p>{profile.mobile || "Not set"}</p>
                              </div>
                              <div>
                                   <p className="font-semibold">Email</p>
                                   <p>{profile.email || "Not set"}</p>
                              </div>
                              <div>
                                   <p className="font-semibold">Address</p>
                                   <p>{profile.address || "Not set"}</p>
                              </div>
                              <div>
                                   <p className="font-semibold">City</p>
                                   <p>{profile.city || "Not set"}</p>
                              </div>
                              <div>
                                   <p className="font-semibold">Pin Code</p>
                                   <p>{profile.pin || "Not set"}</p>
                              </div>
                         </div>
                    </section>
                    <button
                         onClick={() => setIsEditing(!isEditing)}
                         className="mb-6 bg-orange-600 hover:bg-orange-700 cursor-pointer text-white font-semibold py-2 px-6 rounded-md transition"
                    >
                         {isEditing ? "Cancel" : "Edit Profile"}
                    </button>

                    {isEditing && (
                         <section>
                              <h2 className="text-xl font-semibold mb-6 border-b border-gray-300 pb-2">
                                   Edit Profile
                              </h2>
                              <form
                                   onSubmit={handleProfile}
                                   className="space-y-6"
                              >
                                   <div className="flex gap-x-6">
                                        <div className="flex flex-col flex-1">
                                             <label
                                                  htmlFor="name"
                                                  className="mb-2 text-gray-700 font-medium"
                                             >
                                                  Name
                                             </label>
                                             <input
                                                  type="text"
                                                  id="name"
                                                  name="name"
                                                  value={profile.name}
                                                  onChange={handleChange}
                                                  placeholder="Enter your name"
                                                  required
                                                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                                             />
                                        </div>

                                        <div className="flex flex-col flex-1">
                                             <label
                                                  htmlFor="mobile"
                                                  className="mb-2 text-gray-700 font-medium"
                                             >
                                                  Mobile
                                             </label>
                                             <input
                                                  type="tel"
                                                  id="mobile"
                                                  name="mobile"
                                                  value={profile.mobile}
                                                  onChange={handleChange}
                                                  placeholder="Enter your mobile number"
                                                  required
                                                  pattern="[0-9]{10}"
                                                  title="Enter 10 digit mobile number"
                                                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                                             />
                                        </div>
                                   </div>

                                   <div className="flex gap-x-6">
                                        <div className="flex flex-col flex-1">
                                             <label
                                                  htmlFor="email"
                                                  className="mb-2 text-gray-700 font-medium"
                                             >
                                                  Email
                                             </label>
                                             <input
                                                  type="email"
                                                  id="email"
                                                  name="email"
                                                  value={profile.email}
                                                  onChange={handleChange}
                                                  placeholder="Enter your email"
                                                  required
                                                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                                             />
                                        </div>

                                        <div className="flex flex-col flex-1">
                                             <label
                                                  htmlFor="address"
                                                  className="mb-2 text-gray-700 font-medium"
                                             >
                                                  Address
                                             </label>
                                             <input
                                                  type="text"
                                                  id="address"
                                                  name="address"
                                                  value={profile.address}
                                                  onChange={handleChange}
                                                  placeholder="Enter your address"
                                                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                                             />
                                        </div>
                                   </div>

                                   <div className="flex gap-x-6">
                                        <div className="flex flex-col flex-1">
                                             <label
                                                  htmlFor="city"
                                                  className="mb-2 text-gray-700 font-medium"
                                             >
                                                  City
                                             </label>
                                             <input
                                                  type="text"
                                                  id="city"
                                                  name="city"
                                                  value={profile.city}
                                                  onChange={handleChange}
                                                  placeholder="Enter your city"
                                                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                                             />
                                        </div>

                                        <div className="flex flex-col flex-1">
                                             <label
                                                  htmlFor="pin"
                                                  className="mb-2 text-gray-700 font-medium"
                                             >
                                                  Pin Code
                                             </label>
                                             <input
                                                  type="text"
                                                  id="pin"
                                                  name="pin"
                                                  value={profile.pin}
                                                  onChange={handleChange}
                                                  placeholder="Enter your pin code"
                                                  pattern="[0-9]{6}"
                                                  title="Enter 6 digit pin code"
                                                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                                             />
                                        </div>
                                   </div>

                                   <button
                                        type="submit"
                                        className="w-full bg-orange-600 hover:bg-orange-700 cursor-pointer text-white font-bold py-3 rounded-md transition"
                                   >
                                        Save Changes
                                   </button>
                              </form>
                         </section>
                    )}
               </div>
          </div>
     );
};

export default Profile;
