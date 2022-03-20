/* credit goes to https://www.linkedin.com/in/rafaelalucas/ */
import "../css/loading.scss";

function Loading() {
    return (
        <div id="space">
            <div class="content">
                <div class="planet">
                    <div class="ring"></div>
                        <div class="cover-ring"></div>
                    <div class="spots">
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