/* credit goes to https://www.linkedin.com/in/rafaelalucas/ */
import "../style/loading.scss";

function Loading() {
    return (
        <div id="space">
            <div className="content">
                <div className="planet">
                    <div className="ring"></div>
                        <div className="cover-ring"></div>
                    <div className="spots">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <p>loading</p>
            </div>
        </div>
    );
}

export default Loading;