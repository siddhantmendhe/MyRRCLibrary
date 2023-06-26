function ProfileCard({name, title, handle,phone, imageSrc}){
    return <div>
    <div className="flex items-center h-screen w-full justify-center">

<div className="max-w-xs">
    <div className="bg-white shadow-xl rounded-lg py-3">
        <div className="photo-wrapper p-2">
            <img className="w-32 h-32 rounded-full mx-auto" src={imageSrc} alt="John Doe"/>
        </div>
        <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{name}</h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
                <p>{title}</p>
            </div>
            <table className="text-xs my-3">
                <tbody><tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                    <td className="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td className="px-2 py-2">{phone}</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td className="px-2 py-2">{handle}</td>
                </tr>
            </tbody></table>

            <div className="text-center my-3">
                <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#home">View Profile</a>
            </div>

        </div>
    </div>
</div>

</div>
   
        </div>


}
export default ProfileCard;