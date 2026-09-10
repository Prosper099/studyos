"""Flashcards batch 2: Physics to 15 cards per topic."""
import re
PATH = '/home/user/index.html'
s = open(PATH, encoding='utf-8').read()
def esc(t): return t.replace("\\", "\\\\").replace("'", "\\'")

CARDS = {
 'Measurement, Units & Vectors': (12, [
  ("Name the SI units of length, mass, time, electric current and temperature.", "Metre (m), kilogram (kg), second (s), ampere (A) and kelvin (K) — candela for luminous intensity and mole for amount of substance complete the seven base units."),
  ("Which instrument measures to the greatest accuracy: metre rule, vernier caliper or micrometer screw gauge?", "The micrometer screw gauge (0.01 mm), then the vernier caliper (0.1 mm), then the metre rule (1 mm). Use the micrometer for wire diameters and the vernier for internal/external dimensions."),
  ("How do you read a vernier caliper?", "Read the main scale just before the vernier zero, then find the vernier division that aligns exactly with a main-scale line; total = main-scale reading + (aligned division x 0.01 cm)."),
  ("Distinguish between mass and weight.", "Mass is the quantity of matter (kg, measured with a beam balance, constant everywhere); weight is the force of gravity on that mass (newtons, W = mg, measured with a spring balance, varies with location)."),
  ("What is the difference between scalar and vector quantities? Give two examples of each.", "Scalars have magnitude only (mass, time, distance, speed); vectors have magnitude and direction (force, velocity, displacement, acceleration)."),
  ("How do you find the resultant of two perpendicular vectors of 3 N and 4 N?", "By Pythagoras: R = sqrt(3^2 + 4^2) = 5 N, at an angle tan-1(4/3) = about 53 deg to the 3 N force."),
  ("What does it mean to resolve a vector into components?", "Splitting a vector into two perpendicular parts: a vector F at angle θ has a horizontal component F cos θ and a vertical component F sin θ."),
  ("Give the SI (derived) units of velocity, force, density and energy.", "Velocity: m/s; force: newton (kg m/s2); density: kg/m3; energy: joule (kg m2/s2)."),
  ("What is parallax error and how is it avoided?", "Error from reading a scale with the eye off to one side; avoid it by placing the eye directly above the mark being read (mirrored scales help confirm this)."),
  ("How would you measure the period of a pendulum accurately?", "Time 20 or more complete oscillations with a stopwatch and divide by the number of oscillations — this spreads the reaction-time error over many swings."),
  ("What is zero error, and how is it corrected?", "An instrument reading other than zero when it should read zero; correct every reading by subtracting (positive zero error) or adding (negative zero error) the error."),
  ("Convert: (a) 2.5 km to metres, (b) 350 g to kg, (c) 45 minutes to seconds.", "(a) 2500 m; (b) 0.35 kg; (c) 2700 s — kilo means x 1000, and 1 minute = 60 s.")
 ]),
 'Motion & Newton’s Laws': (12, [
  ("Distinguish between speed, velocity and acceleration.", "Speed is distance per time (scalar); velocity is displacement per time (vector — speed in a stated direction); acceleration is the rate of change of velocity (m/s2)."),
  ("State the three equations of uniformly accelerated motion.", "v = u + at; s = ut + (1/2)at2; v2 = u2 + 2as, where u and v are initial and final velocities, a is acceleration, t time and s displacement."),
  ("State Newton's first law of motion.", "A body remains at rest or in uniform motion in a straight line unless acted on by an unbalanced external force — the property of resistance to change is inertia."),
  ("State Newton's second law and its formula.", "The rate of change of momentum of a body is proportional to the applied force and occurs in the force's direction; for constant mass, F = ma."),
  ("State Newton's third law with an example.", "To every action there is an equal and opposite reaction — e.g. a gun recoils backwards when a bullet is fired forward, and rockets push exhaust down to move up."),
  ("Define momentum and give its unit.", "Momentum is mass x velocity (p = mv), a vector measured in kg m/s — a heavy fast-moving body has large momentum and is hard to stop."),
  ("What is impulse?", "Impulse is force x time of action (F t) and equals the change in momentum; padded mats and catching with relaxed hands increase contact time and reduce the force."),
  ("State the principle of conservation of momentum.", "In a collision between two bodies with no external forces, the total momentum before equals the total momentum after — used for collisions and recoil problems."),
  ("A car accelerates uniformly from rest to 20 m/s in 8 s. Find its acceleration and distance covered.", "a = (v - u)/t = 20/8 = 2.5 m/s2; s = ut + (1/2)at2 = 0 + 0.5 x 2.5 x 64 = 80 m (or s = average velocity x t = 10 x 8)."),
  ("On a velocity-time graph, what do the gradient and the area under the line represent?", "The gradient gives the acceleration (negative gradient = deceleration); the area under the graph gives the distance travelled."),
  ("Give two advantages and two disadvantages of friction.", "Advantages: walking and gripping, braking, writing. Disadvantages: wear and tear of parts, wasted energy as heat — reduced by lubrication, ball bearings and streamlining."),
  ("What is terminal velocity?", "The steady maximum speed a falling body reaches when air resistance grows to balance its weight, so acceleration becomes zero — a parachutist descends at terminal velocity.")
 ]),
 'Work, Energy & Power': (12, [
  ("Define work and give its formula and unit.", "Work is done when a force moves its point of application in the direction of the force: W = F x d, measured in joules (1 J = 1 N m)."),
  ("Why is no work done when a man pushes a wall that does not move, or carries a load horizontally?", "In the first case there is no displacement; in the second the force (upwards) is perpendicular to the motion (horizontal), so F x d in the direction of motion is zero."),
  ("Write the formulas for kinetic and potential energy.", "Kinetic energy KE = (1/2)mv2; gravitational potential energy PE = mgh, both in joules."),
  ("State the principle of conservation of energy.", "Energy cannot be created or destroyed, only transformed from one form to another — the total energy of an isolated system remains constant."),
  ("Define power and calculate the power of a motor that does 6000 J of work in 20 s.", "Power is the rate of doing work: P = W/t, in watts. P = 6000/20 = 300 W. (For steady motion, P = Fv also.)"),
  ("How is efficiency defined, and why is it always less than 100%?", "Efficiency = (useful energy output / total energy input) x 100%; some input energy is always lost to friction and heat, so no machine converts all input to useful output."),
  ("A 2 kg body falls from 10 m. Find its kinetic energy just before hitting the ground (g = 10 m/s2).", "By conservation of energy, KE = PE lost = mgh = 2 x 10 x 10 = 200 J (its speed would be v = sqrt(2gh) = about 14.1 m/s)."),
  ("Define mechanical advantage, velocity ratio and their relation to efficiency.", "MA = load / effort; VR = distance moved by effort / distance moved by load; efficiency = MA/VR x 100%."),
  ("Give the velocity ratio of: a single fixed pulley, a wheel and axle, and an inclined plane.", "Single fixed pulley: VR = 1 (it only changes direction); wheel and axle: VR = radius of wheel / radius of axle; inclined plane: VR = 1/sin θ = length/height."),
  ("Describe the energy transformations in a torch and in a hydroelectric dam.", "Torch: chemical energy (battery) -> electrical -> light + heat. Dam: potential energy of stored water -> kinetic -> electrical energy in the generator."),
  ("What energy changes occur in a swinging pendulum?", "At the highest points, energy is all potential; at the lowest point, all kinetic — energy continuously converts between PE and KE (a little is lost to air resistance, so swings decay)."),
  ("Why do machines such as levers and pulleys make work 'easier' without doing less work?", "They reduce the effort force needed by increasing the distance over which the effort acts (VR > 1); work input remains at least equal to work output because of friction losses.")
 ]),
 'Equilibrium of Forces & Moments': (12, [
  ("State the principle of moments.", "For a body in rotational equilibrium, the sum of clockwise moments about any point equals the sum of anticlockwise moments about that point."),
  ("Define the moment of a force and give its unit.", "Moment = force x perpendicular distance from the pivot (turning effect), measured in newton metres (N m)."),
  ("State the two conditions for a body to be in equilibrium.", "The vector sum of all forces on it must be zero (no translation) and the sum of moments about any point must be zero (no rotation)."),
  ("A uniform metre rule balances with a 2 N weight at the 20 cm mark and a 3 N weight at the 80 cm mark. Where is the pivot?", "Taking moments about the pivot: 2 x d1 = 3 x d2 with d1 + d2 = 60 cm, so d1 = 36 cm — the pivot is at the 56 cm mark."),
  ("What is the centre of gravity of a body?", "The point through which the weight of the body acts whatever its orientation — for a uniform regular body it is at the geometric centre."),
  ("State two ways to increase the stability of an object.", "Lower its centre of gravity and increase the area of its base — this is why racing cars are low with wide tyres and why a cone is stable."),
  ("Distinguish between stable, unstable and neutral equilibrium.", "Stable: a small displacement raises the C.G. and the body returns (a cone on its base). Unstable: the C.G. falls and it topples (a cone on its tip). Neutral: the C.G. stays level and it stays put (a ball on a flat surface)."),
  ("What is a couple? Give an example.", "Two equal, opposite and parallel forces whose lines of action differ — they produce pure rotation with no translation, e.g. turning a tap, a steering wheel or loosening a nut with two fingers; moment of a couple = one force x distance between them."),
  ("How do you locate the centre of gravity of an irregular lamina?", "Suspend it freely from a point, hang a plumb line and mark the vertical; repeat from another point — the C.G. is where the lines cross."),
  ("A uniform beam 4 m long weighing 200 N rests on two supports at its ends. A 100 N load sits 1 m from the left support. Find the reaction at the right support.", "Moments about the left end: R2 x 4 = 200 x 2 + 100 x 1 = 500, so R2 = 125 N (and R1 = 175 N)."),
  ("Name the three classes of lever with one example each.", "First class: pivot between load and effort — scissors, crowbar. Second class: load between — wheelbarrow, nutcracker. Third class: effort between — tweezers, the human forearm."),
  ("Why is it easier to open a door by pushing at the handle than near the hinge?", "Moment = force x distance from the pivot; the handle is farthest from the hinge, so the same force gives a larger turning effect — less effort is needed.")
 ]),
 'Centripetal Force & Circular Motion': (12, [
  ("What is centripetal force? Write its formula.", "The inward force that keeps a body moving in a circle: F = mv2/r (also F = m ω2 r), directed towards the centre of the circular path."),
  ("Why is a body in uniform circular motion said to be accelerating even at constant speed?", "Because velocity includes direction, and the direction changes continuously — the acceleration (v2/r) always points towards the centre."),
  ("Name the source of centripetal force in each case: (a) a stone whirled on a string, (b) a car rounding a bend, (c) a planet orbiting the Sun.", "(a) Tension in the string; (b) friction between tyres and road; (c) gravitational attraction."),
  ("Define angular velocity and relate it to linear velocity.", "Angular velocity ω is the angle swept per second (rad/s); the linear speed v = r ω, so points farther from the centre move faster."),
  ("What happens if the string of a whirling stone suddenly breaks?", "The centripetal force vanishes, so the stone flies off tangentially at the point of release — along the direction it was moving at that instant."),
  ("Why are roads banked at curves?", "Banking tilts the road so part of the normal reaction supplies the centripetal force, reducing reliance on friction and allowing higher safe speeds without skidding."),
  ("Why do satellites stay in orbit without engines?", "Gravity supplies exactly the centripetal force needed for their curved path — they are in continuous free fall around the Earth, so no fuel is needed to maintain orbit."),
  ("A 0.5 kg stone is whirled in a horizontal circle of radius 2 m at 4 m/s. Find the tension in the string.", "T = mv2/r = 0.5 x 16 / 2 = 4 N (this tension is the centripetal force)."),
  ("Why does a centrifuge separate components of blood, and a spin-dryer remove water from clothes?", "Denser particles need more centripetal force than the liquid can supply, so they move outward and settle at the bottom (red cells under plasma); in a dryer, water escapes through drum holes because nothing supplies it with centripetal force to keep circling."),
  ("Relate period, frequency and speed for circular motion.", "Period T is the time for one revolution, frequency f = 1/T, and speed v = 2πr/T = 2πrf."),
  ("Why do passengers feel pushed outward when a bus turns sharply?", "Inertia — their bodies tend to continue in a straight line while the bus curves; the 'outward push' is not a real force but the effect of their own inertia (often called centrifugal effect)."),
  ("If the speed of a car round a bend doubles, how much more friction (centripetal force) is needed?", "Four times as much — F = mv2/r, so force is proportional to the square of the speed; this is why even small speed increases cause skidding on curves.")
 ]),
 'Heat Energy & Thermal Expansion': (12, [
  ("Distinguish between heat and temperature.", "Heat is energy transferred because of a temperature difference (measured in joules); temperature is the degree of hotness of a body (measured in kelvin or degrees Celsius with a thermometer)."),
  ("Describe conduction, convection and radiation with one example each.", "Conduction: heat through a material by particle collisions (a metal spoon in hot soup). Convection: heat by movement of the heated fluid itself (boiling water, sea breeze). Radiation: heat as infrared waves needing no medium (heat from the Sun, from a fire)."),
  ("Why are saucepan bases made of metal but handles of wood or plastic?", "Metal is a good conductor, so the base spreads heat to the food; wood and plastic are poor conductors (insulators), so the handle stays cool enough to hold."),
  ("State the linear expansivity and give the expansion formula.", "Linear expansivity α is the increase in length per unit original length per kelvin rise in temperature: ΔL = α L θ; area expansivity is 2α and cubic expansivity 3α."),
  ("Give three everyday consequences or applications of thermal expansion.", "Expansion gaps left in bridges and railway lines; overhead electric wires hung slack so contraction in cold weather cannot snap them; a bimetallic strip (brass + iron) bending to operate thermostats; loosening a tight metal lid with hot water."),
  ("Define specific heat capacity and give the heat formula.", "Specific heat capacity c is the heat needed to raise 1 kg of a substance by 1 K: Q = mcθ (joules). Water's high value (4200 J/kgK) makes it an excellent coolant."),
  ("Define specific latent heat of fusion and of vaporisation.", "Latent heat is heat absorbed or released during a change of state at constant temperature: fusion — solid to liquid (ice melting); vaporisation — liquid to vapour, Q = mL."),
  ("Why does temperature stay constant while ice melts or water boils?", "The heat supplied is used to break the bonds between particles (change of state) rather than to increase their kinetic energy — so the thermometer reading stays steady until the change is complete."),
  ("State three differences between evaporation and boiling.", "Evaporation occurs at any temperature, only at the surface, and slowly/quietly; boiling occurs at a fixed boiling point, throughout the liquid, with bubbles and turbulence."),
  ("How does pressure affect boiling point? Give an application.", "Higher pressure raises the boiling point and lower pressure lowers it — a pressure cooker raises pressure so food cooks faster above 100 degC, while water boils below 100 degC on a high mountain."),
  ("Which surfaces are the best absorbers and emitters of heat radiation?", "Dull black surfaces absorb and emit radiation best; shiny silvery surfaces are the worst (they reflect radiation) — which is why vacuum flasks have silvered walls and why people wear light clothes in hot climates."),
  ("Calculate the heat needed to warm 2 kg of water from 30 degC to 80 degC (c = 4200 J/kgK).", "Q = mcθ = 2 x 4200 x 50 = 420,000 J = 420 kJ.")
 ]),
 'Current Electricity & Ohm’s Law': (12, [
  ("Define electric current and state how it is measured.", "Current is the rate of flow of charge: I = Q/t, in amperes; an ammeter is connected in series with the component whose current is measured."),
  ("State Ohm's law.", "At constant temperature, the current through a metallic conductor is directly proportional to the potential difference across it: V = IR."),
  ("How should a voltmeter be connected, and why is it different from an ammeter?", "In parallel across the component; a voltmeter has very high resistance so it draws negligible current, while an ammeter has very low resistance so it does not reduce the current it measures."),
  ("State three factors that affect the resistance of a wire.", "Length (longer = more resistance), cross-sectional area (thicker = less resistance) and material/temperature — R = ρL/A, and heating increases resistance in metals."),
  ("Give the formulas for resistors in series and in parallel.", "Series: R = R1 + R2 + R3 (same current through each). Parallel: 1/R = 1/R1 + 1/R2 (same p.d. across each) — parallel resistance is always smaller than the smallest branch."),
  ("A 12 V battery drives 0.5 A through a resistor. Find the resistance and the power dissipated.", "R = V/I = 12/0.5 = 24 ohms; P = VI = 12 x 0.5 = 6 W (energy converted at 6 joules per second)."),
  ("Write the formulas for electrical energy and power.", "E = VIt = I2Rt = V2t/R (joules); P = VI = I2R = V2/R (watts). One kilowatt-hour (kWh) = 3.6 x 106 J — the unit on electricity bills."),
  ("A 100 W bulb runs 5 hours daily. If a unit (kWh) costs ₦70, find the weekly cost.", "Energy/day = 0.1 kW x 5 h = 0.5 kWh; per week 3.5 kWh; cost = 3.5 x 70 = ₦245."),
  ("What are the hazards of damaged wiring, and name three safety devices.", "Short circuits, overloads and electric shocks from live casing. Safety: fuses (thin wire melts on excess current), circuit breakers, earthing of metal casings, and proper insulation."),
  ("Why are household appliances connected in parallel rather than in series?", "Each appliance then receives the full mains voltage and can be switched independently; if one fails the others keep working — in series one break kills the whole circuit and voltages divide."),
  ("How does a fuse protect an appliance, and what wire is it made of?", "It is connected in the live wire and is made of a high-resistance, low-melting-point alloy; when current exceeds the rating it heats and melts, breaking the circuit before cables overheat or fire starts."),
  ("Explain why a bird on a single high-voltage wire is not electrocuted.", "Its body is at the same potential as the wire, so there is no potential difference across it and current does not flow through it — danger arises only when a path to earth or another wire exists.")
 ]),
 'Gravitational Field & Weightlessness': (12, [
  ("What is a gravitational field?", "A region of space around a mass in which another mass experiences a force of attraction — the Earth's field pulls objects towards its centre with strength g = about 9.8 N/kg."),
  ("State Newton's law of universal gravitation.", "Every two masses attract each other with a force proportional to the product of their masses and inversely proportional to the square of the distance between them: F = G m1 m2 / r2."),
  ("Why does weight change from place to place while mass does not?", "Weight W = mg depends on g, which varies with location (Earth's poles vs equator, altitude, other planets — g on the Moon is about 1/6 of Earth's); mass is the amount of matter and never changes."),
  ("What does a 'gravitational field strength of 10 N/kg' mean?", "Every kilogram of mass experiences a downward force of 10 N there — so a 50 kg person weighs 500 N."),
  ("Why do astronauts feel weightless in orbit?", "They and their craft are in continuous free fall around the Earth — everything accelerates together at the same rate, so no support force is felt, even though gravity is still acting."),
  ("State two factors that make g slightly different at different places on Earth.", "Distance from the Earth's centre (g is greater at the poles, smaller at the equator and at high altitude) and the Earth's rotation (centrifugal effect reduces apparent g at the equator); local rock density also matters."),
  ("What is escape velocity?", "The minimum speed needed for an object to break free of a planet's gravitational pull without further propulsion — about 11.2 km/s from the Earth."),
  ("Why do all objects fall with the same acceleration in a vacuum?", "Gravity gives every mass the same acceleration g because the greater force on a larger mass is exactly offset by its greater inertia — in vacuum (no air resistance) a feather and a stone land together."),
  ("How does gravity keep the Moon in orbit?", "The Moon's forward motion would carry it off in a straight line, but the Earth's gravitational pull continually bends its path into a closed orbit — gravity provides the centripetal force."),
  ("What causes ocean tides?", "Mainly the Moon's gravitational pull (and the Sun's), which raises bulges of water on the sides of the Earth facing and opposite the Moon — most places get two high and two low tides daily."),
  ("State the value of the universal gravitational constant G and what 'inverse square' implies.", "G = 6.67 x 10^-11 N m2/kg2; if the distance between two masses doubles, the gravitational force falls to one quarter (1/2^2) of its former value."),
  ("Why is launching a satellite eastward from near the equator advantageous?", "It starts with the Earth's maximum rotational speed (about 460 m/s at the equator) in the direction of launch, saving fuel, and equatorial orbits can match the Earth's spin for geostationary satellites.")
 ]),
 'Simple Harmonic Motion & Waves': (12, [
  ("Define simple harmonic motion (S.H.M.).", "Motion in which the acceleration of a body is directly proportional to its displacement from a fixed point and is always directed towards that point: a = -ω2x."),
  ("Give three examples of bodies in simple harmonic motion.", "A simple pendulum (small swings), a mass oscillating on a helical spring, and the balance wheel of a watch."),
  ("State the period formula of a simple pendulum and what it depends on.", "T = 2π sqrt(L/g) — it depends only on the length L and gravity g, not on the mass of the bob or the amplitude (for small swings)."),
  ("Define amplitude, period and frequency, and relate frequency to period.", "Amplitude is the maximum displacement from the rest position; period T is the time for one complete oscillation; frequency f is oscillations per second (Hz), with f = 1/T."),
  ("A pendulum makes 20 oscillations in 40 s. Find its period and frequency.", "T = 40/20 = 2 s; f = 1/T = 0.5 Hz."),
  ("What energy changes occur during simple harmonic motion?", "Energy alternates between potential (maximum at the extremes) and kinetic (maximum at the centre); with no friction the total mechanical energy stays constant."),
  ("Distinguish between transverse and longitudinal waves with examples.", "Transverse: vibrations perpendicular to wave travel — light, water ripples, waves on a string. Longitudinal: vibrations parallel to travel, with compressions and rarefactions — sound."),
  ("Write the wave equation and define its terms.", "v = f λ, where v is wave speed (m/s), f frequency (Hz) and λ wavelength (m) — the distance between successive crests (or compressions)."),
  ("Name four wave behaviours and give an example of each.", "Reflection (echo; mirror images), refraction (a stick appearing bent in water), diffraction (waves spreading through a gap), interference (ripples crossing on a pond)."),
  ("Why can sound not travel through a vacuum?", "Sound is a mechanical wave that needs particles to transmit the vibrations — in a vacuum there are no particles, so a ringing bell in a jar becomes silent as the air is pumped out."),
  ("A ship's sonar pulse returns from the sea bed after 0.4 s. If sound travels at 1500 m/s in water, how deep is the sea?", "The pulse travels down and back, so depth = (v x t)/2 = (1500 x 0.4)/2 = 300 m."),
  ("State two uses of ultrasound.", "Medical scanning of an unborn baby (safe, non-invasive imaging) and detecting flaws or measuring thickness in metals; it is also used in cleaning and by bats for echolocation.")
 ]),
 'Atomic Structure, Radioactivity & Nuclear Energy': (11, [
  ("What is radioactivity?", "The spontaneous disintegration (decay) of unstable atomic nuclei, emitting radiation and forming new elements — it is a nuclear, not chemical, process and is unaffected by temperature or pressure."),
  ("Name the three types of radiation and describe each.", "Alpha: helium nuclei (2 protons + 2 neutrons), heavy, +2 charge, stopped by paper. Beta: fast electrons, -1 charge, stopped by a few mm of aluminium. Gamma: high-energy electromagnetic waves, no charge, greatly reduced only by thick lead or concrete."),
  ("Which radiation is the most ionising and which the most penetrating?", "Alpha is the most ionising (heavy and doubly charged) but least penetrating; gamma is the least ionising but most penetrating."),
  ("How do alpha and beta decay change the nucleus?", "Alpha decay: mass number falls by 4 and atomic number by 2. Beta decay: a neutron becomes a proton — mass number unchanged, atomic number rises by 1."),
  ("Define half-life with an example.", "Half-life is the time for half the atoms in a sample to decay (or its activity to halve). E.g. if a source of half-life 8 days has activity 800 counts/s, after 16 days it is 200 counts/s (two half-lives)."),
  ("State four uses of radioactive isotopes.", "Carbon-14 dating of fossils and artefacts; cobalt-60 gamma rays to treat cancer and sterilise equipment; radioactive tracers to detect pipe leaks and study fertilizer uptake; gauges to measure the thickness of paper or metal sheets; nuclear power generation."),
  ("State three hazards of radiation and two safety precautions.", "Hazards: radiation sickness, cancer and genetic mutations from damaged cells. Precautions: handle sources with tongs/forceps, store in lead containers, minimise exposure time, and use shielding and badges to monitor dose."),
  ("What is nuclear fission?", "The splitting of a heavy nucleus (uranium-235) after absorbing a slow neutron into two lighter nuclei plus neutrons and vast energy; the released neutrons can split more nuclei — a chain reaction — controlled by rods in a reactor or uncontrolled in a bomb."),
  ("What is nuclear fusion, and where does it occur naturally?", "The joining of light nuclei (hydrogen) into a heavier one (helium) with an even greater release of energy — it powers the Sun and stars and requires millions of degrees."),
  ("What does E = mc2 tell us about nuclear reactions?", "Mass can be converted into energy: the small mass lost (mass defect) in fission or fusion appears as enormous energy, since c2 = (3 x 10^8)^2 is a huge factor."),
  ("Name two detectors of radiation and how one of them works.", "The Geiger-Muller (G-M) tube and the cloud chamber (also photographic film). In a G-M tube, radiation ionises the gas; the ions are accelerated to the central wire, producing pulses of current that are counted as clicks.")
 ]),
 'Projectile Motion': (12, [
  ("Define a projectile and give two examples.", "A body given an initial velocity and then allowed to move under gravity alone — a kicked football, a bullet from a gun (ignoring air resistance), a stone thrown into the air."),
  ("Why is the path of a projectile a parabola?", "The horizontal motion is uniform (constant velocity, no horizontal force) while the vertical motion has constant acceleration g downwards; combining them gives a parabolic trajectory."),
  ("State the key principle relating the horizontal and vertical motions of a projectile.", "They are independent of each other — the horizontal velocity never changes, while the vertical velocity changes by g each second; they share only the time of flight."),
  ("Write the formula for the time of flight of a projectile launched at angle θ with speed u.", "T = 2u sin θ / g — the time to rise to maximum height is half of this: u sin θ / g."),
  ("Write the formula for maximum height reached.", "H = u2 sin2 θ / (2g) — the vertical velocity is zero at the highest point."),
  ("Write the formula for range, and the angle giving maximum range.", "R = u2 sin 2θ / g; since sin 2θ is greatest (= 1) at 2θ = 90 deg, the maximum range is achieved at θ = 45 deg."),
  ("A ball is thrown at 20 m/s at 30 deg to the horizontal (g = 10 m/s2). Find its time of flight and maximum height.", "T = 2(20)(sin 30)/10 = 2 s; H = (20^2 x sin^2 30)/(2 x 10) = 400 x 0.25 / 20 = 5 m."),
  ("What is the velocity of a projectile at its maximum height?", "Purely horizontal and equal to u cos θ — the vertical component has fallen to zero, which is why the projectile moves slowly near the top."),
  ("Why do complementary angles (e.g. 30 deg and 60 deg) give the same range?", "Because sin 2θ is the same for both: sin 60 = sin 120 — but the 60 deg shot flies higher and stays longer in the air."),
  ("A stone is projected horizontally from a cliff 45 m high at 10 m/s. How long does it take to reach the ground (g = 10 m/s2)?", "Vertical motion decides the time: h = (1/2)gt2, so 45 = 5t2, t = 3 s (independent of the horizontal speed). It lands 10 x 3 = 30 m from the cliff base."),
  ("State two effects of air resistance on a real projectile.", "It reduces the range and maximum height and makes the path asymmetric (the descent steeper than the ascent) — so the best real launching angle is slightly less than 45 deg."),
  ("Give two practical applications of projectile motion.", "Athletics (long jump and javelin take-off angles near 45 deg maximise distance) and ballistics/military aiming; also kicking a football for loft and distance.")
 ])
}

ins = 0
for title, (need, pairs) in CARDS.items():
    assert len(pairs) >= need, title
    m = re.findall(r"\n(\s*)title: '" + re.escape(title) + r"',", s)
    assert len(m) == 1, ('anchor', title, len(m))
    ind = m[0]
    pos = s.index("\n" + ind + "title: '" + title + "',")
    j = s.index('cards: [', pos)
    k = s.index('\n', j) + 1
    body = ''.join((ind + "  { q: '%s', a: '%s' },\n" % (esc(q), esc(a))) for q, a in pairs[:need])
    s = s[:k] + body + s[k:]
    ins += need

open(PATH, 'w', encoding='utf-8').write(s)
print('Physics: inserted', ins, 'cards')
