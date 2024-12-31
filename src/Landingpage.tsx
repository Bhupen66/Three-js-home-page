// Import necessary libraries
import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { gsap } from 'gsap';
import * as THREE from 'three';

// Custom 3D Component
const RotatingSphere = () => {
    const sphereRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (sphereRef.current) {
            sphereRef.current.rotation.x += 0.01;
            sphereRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={sphereRef} scale={1.5}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color={"#6A0DAD"} metalness={0.6} roughness={0.2} />
        </mesh>

    );
};




const LandingPage: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // GSAP animations
        if (heroRef.current && contentRef.current) {
            gsap.fromTo(
                heroRef.current,
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
            );

            gsap.fromTo(
                contentRef.current.children,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                }
            );
        }
    }, []);




    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col">
                {/* Hero Section */}
                <div
                    ref={heroRef}
                    className="relative flex flex-col items-center justify-center h-screen text-center"
                >
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
                        Welcome to Event Titans
                    </h1>
                    <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
                        Discover, organize, and enjoy extraordinary events effortlessly with Event Titans.
                    </p>
                    <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg hover:opacity-80 transition">
                        Get Started
                    </button>


                    <div className="absolute inset-0">
                        <Canvas>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[5, 5, 5]} />
                            <RotatingSphere />
                            <OrbitControls enableZoom={false} />
                        </Canvas>
                    </div>
                </div>



                {/* Features Section */}
                <div
                    ref={contentRef}
                    className="container mx-auto py-16 px-6 text-center grid gap-12 md:grid-cols-3"
                >
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-400 mb-4">Discover Events</h2>
                        <p className="text-gray-300">
                            Explore a wide range of events curated just for you.
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-pink-400 mb-4">Organize Effortlessly</h2>
                        <p className="text-gray-300">
                            Manage your events with intuitive tools and insights.
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-400 mb-4">Join the Community</h2>
                        <p className="text-gray-300">
                            Connect with like-minded event enthusiasts.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 text-white text-center py-6">
                
            </div>
        </>
    );
};

export default LandingPage;
