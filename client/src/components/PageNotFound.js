import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <>
            <div className="container-xxl py-5">
                <h1 className="text-center">Whoops! &#128549; The page you were looking for doesn't exist!</h1>
                <div className="text-center">
                    <Link className="btn btn-outline-dark" to={"/"}>
                        Whoops! Looks like you've gotten lost - go home &#127969; &#128522;
                    </Link>
                </div>
            </div>
        </>
    );
}

export default PageNotFound;
