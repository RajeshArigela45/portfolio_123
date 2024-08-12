import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from '../styles/Teaching.module.css';

type TeachingItem = {
    id: number;
    courseName: string;
    semester: string;
    year: number;
    university: string;
};

const LatestTeaching: React.FC = () => {
    const [latestTeaching, setLatestTeaching] = useState<TeachingItem[]>([]);

    useEffect(() => {
        const fetchLatestTeaching = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/teaching/latest');
                setLatestTeaching(response.data);
            } catch (error) {
                console.error("Failed to fetch latest teaching data", error);
            }
        };
        fetchLatestTeaching();
    }, []);

    return (
        <div className={styles.teachingContainer}>
            <h1 className={styles.heading}>
                <br/>
                <br/>
                Latest <span className="text-yellow-400">Teaching</span>
            </h1>
            <div className={styles.teachingList}>
                {latestTeaching.map((item) => (
                    <Link href={`/teaching/${item.id}`} key={item.id} legacyBehavior>
                        <a className={styles.teachingBox}>
                            <div className={styles.teachingContent}>
                                <p className={styles.teachingTitle}>{item.courseName}</p>
                                <p className={styles.teachingDescription}>{item.semester} {item.year}</p>
                                <p className={styles.teachingDescription}>{item.university}</p>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
            <div className={styles.readMoreContainer}>
                <Link href="/teaching" legacyBehavior>
                    <a className={styles.readMoreButton}>Read More</a>
                </Link>
            </div>
        </div>
    );
};

export default LatestTeaching;