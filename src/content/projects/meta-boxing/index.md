---
title: "Meta-Boxing"
type: "xr"
year: 2021
authors: ["Jungjin Park", "Hye-Young Jo"]
venue: "KAIST GCT700"
abstract: "A multiplayer VR boxing game with controllable, physics-based characters (a KAIST class project). I worked on the study design, graphic design, and user study."
teaser: ./teaser.png
teaserAlt: "Two players boxing in VR through physics-based characters, with the controller-driven arm model shown above"
tags: ["VR", "game", "physics"]
award: "Excellence Award, Korea Metaverse Developer Contest 2021 · Top Research Award, 2022 four-university joint seminar"
links:
  youtube: "https://youtu.be/-d2arU9pzFM"
featured: false
draft: false
---

## Statement

Natural interaction is essential in VR boxing, where characters constantly collide. Existing VR
boxing games use kinematic characters (keyframe animation or ragdoll physics) that interact
unnaturally, replaying the same reaction regardless of an attack's strength or position, and
freezing abruptly after a hit. Meta-Boxing lets the player control a physics-based character
through a hidden kinematic character, enabling varied reactions and natural transitions. Its
characters create dynamic movement cost-effectively, without increasing simulator sickness when
viewed from a third-person perspective. (KAIST GCT700, led by Prof. Woontack Woo; I contributed to
study design, graphic design, and the user study.)

## Project deck

![Concept sketch, two VR players box through physics-animated characters over a Photon Cloud network, with an RL opponent mode](./slide-02.jpg)
![Approach flowchart, players pick PvP or PvE against an AI, then fight with physics-based action and reaction until a win or loss](./slide-04.jpg)
![Final result, two characters boxing in a spotlit ring inside a dark arena](./slide-07.jpg)
![Related work slide comparing first- and third-person perspectives in VR across six prior studies](./slide-10.jpg)
![Study design table crossing first- and third-person perspective with kinematic and physics-based characters, four conditions](./slide-13.jpg)
![User study procedure, four 1-3 minute conditions with questionnaires and rest, and photos of participants in VR headsets](./slide-17.jpg)
![Box plots of immersion scores for the four conditions; first-person kinematic ranked highest overall](./slide-21.jpg)
![Participant preferences, some liked kinematic characters' precise control, others enjoyed physics-based reactions to their punches](./slide-25.jpg)
