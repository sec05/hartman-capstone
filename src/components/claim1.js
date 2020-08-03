import React from 'react'
import BottomArrow from './arrows/bottom-arrow';
import TopArrow from "./arrows/top-arrow";
class claim1 extends React.Component {
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
       //document.querySelector(".img-container").style.opacity = '0';
        this.index++;
        if (this.index > 2) {
            this.index = 0;
        }

     this.setState(
            {
                name: this.pictureNames[this.index], path: this.picturePaths[this.index],
            });
         
             
    }



    render() {
        return (
            <div className="claim">
                <TopArrow link="/intro"></TopArrow>
                <div className="claim-content">
                    <h1>Anti-Judaism in the Gospels</h1>
                    <div className="img-container" ><img src={process.env.PUBLIC_URL + this.state.path} alt="gospels"></img><p style={{ textAlign: 'center' }}>{'Saint ' + this.state.name}</p></div>
                    <h2 className="">After the crucifixion of Jesus Christ, a sect of the Jews using it as a catalyst to split off and formed the beginnings of Christianity. In the process of creating Christianity, gospels were written by Matthew, John, and Paul that detailed criticisms of Jewish law and practice. “And when you pray, do not be like the hypocrites, for they love to pray standing in the synagogues and on the street corners to be seen by others. Truly I tell you, they have received their reward in full. ”(Matthew 5:6). Matthew criticizes Jews by calling them hypocrites and suggests that their prayer is performative. These Gospels became the foundation of scholars such as Emmanuel Kant. In 1793 published a book named Religion Within the Bounds of Mere Reason, in which Kant detailed his ideas of autonomy, how religion is personal to oneself. Kant did not see Judaism as a religion that could be autonomous, hence not making it a legitimate religion in his eyes. This idea would go on to influence Adolf Hitler in his writing of the book, Mein Kampf.
</h2></div>
                <BottomArrow link="/claim2"></BottomArrow>
            </div>
        )
    }
}

export default claim1;