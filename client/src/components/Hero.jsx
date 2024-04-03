import './Hero.css';

const Hero = () => {
  return (
    <section className="banner position-relative mt-3">
            <div className="banner-content d-flex position-absolute top-0 bottom-0 start-0 end-0 align-items-end">
                    <div className="row align-items-end">
                        <div className="col h-100">
                            <h1 className="banner-heading lh-1 text-uppercase">Fashion <br/> & Freedom</h1>
                            <p className="banner-paragragh fs-5 fw-medium">
                                Bringing Your Fashion Brand's Unique Identity to Life Through <br/> Amazing Styles and Products.
                            </p>
                            
                        </div>
                    </div>
            </div>
            <div className="banner-image position-relative overflow-hidden">
                <div className="image-backdrop position-absolute top-0 bottom-0 start-0 end-0 opacity-50"></div>
                <img className="object-fit-cover w-100 h-100" src="https://cdn.prod.website-files.com/63cffb7c16ab3347fc9734c8/63d2279606000f5f8a92b792_home-hero-p-1600.webp" alt="home banner" />
            </div>
        </section>
  )
}

export default Hero
