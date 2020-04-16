import React from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { TiFlash } from 'react-icons/ti';
import { FaGithubSquare, FaAndroid } from 'react-icons/fa';
import {
  DiReact,
  DiPhp,
  DiGit,
  DiMysql,
  DiJqueryLogo,
  DiBootstrap,
} from 'react-icons/di';

const Job = () => (
  <section className="site-about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <h3>Currently working .</h3>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div className="row">
              <div className="col-lg-2 col-md-12">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link
                      eventKey="first"
                      style={{
                        color: '#444857',
                        background: '#eeeeee',
                        fontWeight: 'bold',
                      }}
                    >
                      Tulassi
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <div className="col-lg-10 col-md-12">
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    Software Trainee Engineer{' '}
                    <a
                      href="https://www.tulassi.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @ Tulassi Technology
                    </a>
                    <p className="fromAndTo">Sep 2019 to till date</p>
                    <ul className="list-unstyled">
                      <li>
                        <TiFlash />
                        Demo Project{' '}
                        <a
                          href="https://github.com/pranavp10/inventory"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithubSquare />
                        </a>
                        <ul>
                          <li>Name: Inventory</li>
                          <li>Duration: (28-Oct-2019 to 27-Nov-2019)</li>
                          <li>
                            Individual Project : A Complete Software for
                            managing inventory
                          </li>
                          <li>
                            Tech Stack:
                            <ul>
                              <li>
                                jQuery
                                <DiJqueryLogo />
                              </li>
                              <li>
                                Bootstrap3
                                <DiBootstrap />
                              </li>
                              <li>
                                PHP
                                <DiPhp />
                              </li>
                              <li>
                                MySQL
                                <DiMysql />
                              </li>
                              <li>
                                Git
                                <DiGit />
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <TiFlash />
                        App Development{' '}
                        <a
                          href="https://play.google.com/store/apps"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaAndroid />
                        </a>
                        <ul>
                          <li>Name: Poultry</li>
                          <li>Duration: (28-Nov-2019 to till today)</li>
                          <li>
                            Project Details: Multiple Web module integrated with
                            App
                          </li>
                          <li>
                            Tech Stack:
                            <ul>
                              <li>
                                React Native
                                <DiReact />
                              </li>
                              <li>
                                PHP
                                <DiPhp />
                              </li>
                              <li>
                                MySQL
                                <DiMysql />
                              </li>
                              <li>
                                Git
                                <DiGit />
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </div>
      </div>
    </div>
  </section>
);

export default Job;
