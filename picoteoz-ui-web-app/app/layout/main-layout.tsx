import {
    Links,
    Meta,
    Scripts,
    ScrollRestoration,
} from "react-router";

type Props = {
    children?: React.ReactNode; 
  };

const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );

}

export default MainLayout;