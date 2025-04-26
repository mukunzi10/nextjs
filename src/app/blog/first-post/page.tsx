export default function Blog(){
    return(
        // container
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <div className=" bg-green-500 flex flex-col gap-4 items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-3xl font-bold text-blue-800">Hello Blog</h1>
        
            <h1 className="text-blue-800 text-sm text-shadow-2xs">Hello Blog</h1>
            <button className="btn btn-primary">Hello daisyUI!</button>
            <button className="btn btn-secondary">Hello daisyUI!</button>
            <button className="btn btn-accent">Hello daisyUI!</button>
            <button className="btn btn-neutral">Hello daisyUI!</button>
            <button className="btn btn-info">Hello daisyUI!</button>
            <button className="btn btn-success">Hello daisyUI!</button>
            <button className="btn btn-warning">Hello daisyUI!</button>
            <button className="btn btn-error">Hello daisyUI!</button>
            <button className="btn btn-ghost">Hello daisyUI!</button>
            <button className="btn btn-link">Hello daisyUI!</button>
            <button className="btn btn-link btn-disabled">Hello daisyUI!</button>
         
        </div>
        {/* form card container */}
    
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

                
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    <div className="flex w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
</div>
</div>
</div>
</div>
    )
}