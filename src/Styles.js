import styled from 'styled-components';

const Home = styled.div`   
    display: flex;
    flex-direction: column;

    width: 90%;
    margin: 0 auto;

    .about {
        max-width: 375px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .headerBG {
            position: relative;
            z-index: 1;
            margin-top: 8rem;
            color: #efefef;
            font-size: 3.5rem;
            font-weight: bold;
        }

        .mrHeader {
            position: relative;
            top: -3.25rem;
            z-index: 100;

            .mrName {
                font-size: 2rem;
                font-weight: bold;
            }

            .mrTitle {
                font-size: 1.125;
                font-weight: bold;
                margin-bottom: 1rem;
            }

            .mrLink{
                a {
                    text-decoration: none;
                    line-height: 1.75rem;
    
                    svg {
                        color: black;
                        margin-right: .5rem;
                    }
    
                    span {
                        color: #4183c4;
                    }
                }
            }
        }

        .mrFluff{
            font-size: .8rem;
            line-height: 1.25rem;
        }

        .mrContact {
            display: flex;
            width: 80%;
            margin: 0 auto;
            justify-content: space-around;
            margin-bottom: 5rem;
            font-size: 1.5rem;
            
            a {
                color: black;
            }
        }
    }

    .projects {
        display: flex;
        flex-direction: column;

        .project {
            display: flex;
            flex-direction: column;
            // height: 100vh;
            padding-bottom: 2rem;
            border-bottom: 1px solid gainsboro;

            .md-lg-title{display: none;}

            h5 {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;

                a {
                    margin-left: 1rem;

                    svg{
                        color: orange;
                    }
                }
            }

            ul {
                padding-left: 1.5rem;
            }

            img{width: 100%}

            p{
                font-size: .9rem;
                line-height: 1.25rem;
            }
        }

        .contact{
            margin-bottom: 4rem; 
            .formRow{
                
                flex-direction: column;

                input[type="text"], input[type="email"], textarea {
                    background: rgba(144,144,144,0.15);
                    border: none;
                    border-raduis: 0;
                    outline: 0;
                    height: 3rem;
                    padding: 0 1em;
                    margin: .5rem 0; 
                    width: 92.125%;
                }
                
                input[type="submit"].primary {
                    height: 3rem;
                    margin: .5rem 0;
                    padding: 0 1rem;
                    font-weight: 700;
                    letter-spacing: 0.05rem;
                    background-color: orange;
                    border: 0;
                    box-shadow: none;
                    color: #fff;
                    width: 100%;
                }
            }                
        }

    }

    @media (min-width: 600px) {
        flex-direction: row;
        justify-content: space-between;

        .about{
            width: 320px;
            position: fixed; 
            
            .mrContact{
                margin-bottom: 2rem;
            }
        }
        
        .projects{
            margin: 8rem 0 0 360px; z-index: 2;

            .project{
                .md-lg-title{display: block; margin-top: .75rem;}
                .sm-title{display: none;}
                img {width: 100%;}
            }            
        }
    }

    @media (min-width: 900px) {
        justify-content: flex-start;

        .projects{
            
            .project {
                display: flex;
                flex-direction:row;
                justify-content: space-between;
                width: 100%;
                margin-bottom: 2rem;
                
                div {
                    width: 48%;                   
                }

                .projectDetail{
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    .md-lg-title{display: block}

                   p{
                        margin-top: 0;
                        font-size: .8rem;

                        li {
                            line-height: 1rem;
                        }
                    }
                }
            }

            .contact {
                
                margin: 1rem 0 4rem;

                .formRow{
                    display: flex;
                    flex-direction: row;
                    justify-content:space-between;

                    input[type="text"], input[type="email"], textarea {
                        width: 22%;
                    }
                    
                    input[type="submit"].primary {
                        width: 22%;
                    }
                }

            }
        }
    }
    @media (min-width: 1200px) {}
`;

export default Home;