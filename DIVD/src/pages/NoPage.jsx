import { Link } from 'react-router-dom';

export default function NoPage() {
    return (
        <div className="page-container">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/Home">Go back home</Link>
        </div>
    );
}
