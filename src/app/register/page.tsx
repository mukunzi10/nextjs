export default function Register()
{
    return (
        <div className=" container mx-auto py-4 bg-green-600">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <label className="floating-label">
                        <input type="text" placeholder="Medium" className="input input-md" />
                        <span>Medium</span>
                    </label>
                    <label className="floating-label">
                        <input type="text" placeholder="Large" className="input input-lg" />
                        <span>Large</span>
                    </label>
                    <label className="floating-label">
                        <input type="text" placeholder="Extra Large" className="input input-xl" />
                        <span>Extra Large</span>
                    </label>
                </div>
            </div>

         

       </div>
    )


}