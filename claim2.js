import React from 'react'
import BottomArrow from './arrows/bottom-arrow';
import TopArrow from "./arrows/top-arrow";
class claim2 extends React.Component {
    constructor(props) {
        super(props);
        const picturePaths = ['/john.jpg', '/Matthew.png', '/paul.jpg'];
        this.picturePaths = picturePaths;
        const pictureNames = ['John', 'Matthew', 'Paul'];
        this.pictureNames = pictureNames;
        var index = 0;
        this.index = index;
        this.picturePaths = picturePaths;
        this.state = { name: pictureNames[index], path: picturePaths[index] };
        setInterval(this.updatePic.bind(this),3000);
    }

    updatePic = () => {
        this.index++;
        if (this.index > 2) {
            this.index = 0;
        }

        this.setState(
            {
                name: this.pictureNames[this.index], path: this.picturePaths[this.index],
            });

    }
    render(){
        return (
            <div className="claim">
                <TopArrow link="/claim1"></TopArrow>
                <div className="claim-content">

                    <h1>Anti-Judaism in the Holocaust</h1>
                    <h2>When Adolf Hitler published Mein Kampf in 1925, he laid out a blueprint for the Third Reich. Hitler’s rhetoric in Mein Kampf was derived from the belief in Matthew as well as Kaunt who both criticized Jewish law. “Only with the entrance of the Jew did that feeling of estrangement, between employers and employees begin which led at a later date to the political class-struggle.”(Hitler, 260) Hitler’s beliefs in the failure and criticisms of Jewish law allowed him to push rhetoric that Germany’s capitalist failures were the fault of the Jews. Mein Kampf brought forward an idea of the biological corruption of the Jews, which was used to create racial superiority over them. Furthermore, this idea of biological corruption and racial superiority would be used to fuel modern age white supremacy and anti-semitism.
                    </h2>
                </div><BottomArrow link="/claim3"></BottomArrow>
            </div>
        )
    }
}
export default claim2