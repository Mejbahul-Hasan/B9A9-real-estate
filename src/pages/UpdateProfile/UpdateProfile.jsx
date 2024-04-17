import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);

    const handleProfileUpdate = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(name, photo);

        updateUserProfile(name, photo)
                    .then(result => {
                        console.log(result.user);
                        e.target.reset();
                    })
                    .catch(error => {
                        console.error(error);
                    })
    }


    return (
        <div className="hero bg-base-200 py-10 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row">
                <img src={user?.photoURL || "https://i.ibb.co/rGZ42tK/todd-kent-178j8t-Jr-Nlc-unsplash.jpg"} className="w-40 rounded-full shadow-2xl" />
                <div>
                    <h1 className="text-2xl font-bold">Name: {user?.displayName || 'User name not found'}</h1>
                    <p className="py-6 text-xl font-bold">E-mail Address: {user?.email || "email address not found"}</p>
                    <form onSubmit={handleProfileUpdate}>
                        <label className="input input-bordered flex items-center gap-2">
                            Name
                            <input type="text" name="name" className="grow" placeholder="Correct/Edited Name" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 my-5">
                            PhotoURL
                            <input type="text" name="photo" className="grow" placeholder="Correct/Edited PhotoURL" />
                        </label>
                        <button className="btn btn-primary">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;