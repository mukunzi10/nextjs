export default function Footer()
{
    return(
        <footer className="mt-12 footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
  </nav>
  <nav>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
  </nav>
</footer>

    );
}