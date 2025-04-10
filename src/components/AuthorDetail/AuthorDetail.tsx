import { IAuthorDetailProps } from "../types";


export default function AuthorDetail({ author }: IAuthorDetailProps) {
    return (
        <div>
            <h2>{author.name}</h2>
            <p>
                <strong>Username:</strong> {author.username}
            </p>
            <p>
                <strong>Email:</strong>
                <a href={`mailto:${author.email}`}>{author.email}</a>
            </p>
            <p>
                <strong>Phone:</strong> {author.phone}
            </p>
            <p>
                <strong>Website:</strong>
                <a
                    href={`https://${author.website}`}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {author.website}
                </a>
            </p>

            <h3>Address</h3>
            <p>
                {author.address.street}, {author.address.suite},<br />
                {author.address.city}, {author.address.zipcode}
            </p>

            <h3>Company</h3>
            <p>
                <strong>{author.company.name}</strong>
                <br />
                <em>{author.company.catchPhrase}</em>
                <br />
                <small>{author.company.bs}</small>
            </p>
        </div>
    );
}
