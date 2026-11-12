# Thaw

**Player:** Hans (Sam plays him)
**When (for Sam, not shown to players):** the same held breath in the cave as "The Eleven Paces", "Four Notes" and "Two Tongues". Hans stands by the tunnel with the black box warm in his chest. A flake of black ash lands on the seam of his chest plate, right over the box. The box goes cold. His sound stones start playing a tune he doesn't have on file: an old Valerian waltz. Behind it are three hundred years he had put away.
**What it sets up:** the choice Hans makes at the end (W3) is saved and sent to Sam, like the other interludes.
**Reading time:** about 25 minutes along one path, plus the fight.
**Echo:** one, set by the last choice. One use; expiry as Sam rules for all Echoes.
**Same rules as the other interludes:** Matthew never appears in a future. No god speaks in words. None of the afternoon's words appear (the list is in the DM notes). Every future here is a *maybe*.
**Canon used (from the table or Sam):** Hans is a Valerian construct, the most advanced of his kind, over three hundred years old. He was frozen in Valeria and thawed out. He worked at the inn in the ruins as Gerda's butler and muscle. The crew bought his freedom (1,200 gp to Gerda; Saphira gave him 300 gp of his own). The blue headphones are his sound stones. The black box from the ship is inside his chest.
**New lore in here, all marked [SAM?]:** the house as it was when it was new, the woman who built his face, the guests who stayed one night and walked north in the morning, the last guest, the night the cold came, and Gerda's hands in the thaw. These are Claude's fills on top of the table's canon. Sam keeps, changes or cuts them before the interlude is switched on (H11_ON).

**For the build (the parser skips everything above the first rule):**

*Look.* {past}: the house when it was new, warm gold light, steam, polished stone, a glass roof. Seen in Hans's own memory, a little too sharp, like a record played back. {future}: cold blue-white, frost on everything, glitching text. Untagged: the present, the cave, lamp and ash. {again}: the loop, the waltz played backwards.

*Figures.* Two, each with a voice style:
- **The last guest** (a very tall guest in a travelling cloak, warm as a stove, from three hundred years ago): never speaks after S1. Seen at the edges of the past visions, always walking north.
- **The last Hans** (Hans, three hundred years on; frost on his face plate, sound stones silent, one hand frozen in a lamp-holding grip): lines written `@future: "..."`. Low, flat, a voice that has said "Welcome" to an empty room too many times. Sometimes two voices at once. Never seen from the front before W2.

*Whispers.* `~text~` is the last Hans's voice bleeding into the passage.

*Ash.* `^^text^^` is text the black ash is eating.

*Conditions.* A paragraph starting `?flicker>=3:`, `?dread>=3:` or `?seen P2c:` shows only when that holds.

*Degrees.* Instead of paces: Hans's own warmth. Eleven degrees above freezing, shown as a strip. H1 is the first drop. Each of the seven visions (three past, S1, three futures) takes one. L1 runs them backwards. W1 is the last degree. W2 is at freezing. The endings say whether he stays warm.

*Meters.* `+dread` (0-5): how much frost has got into him; more whispers, more ash, a third Frozen Guest in the fight. `+flicker` / `-flicker` (0-5, start at 2): how faint the last Hans is. High, he stutters and goes see-through. Low, he's solid.

*Sound.* Cue list:
- `waltz`: an old slow waltz on a music box and strings, slightly out of tune, warm.
- `waltz-back`: the same waltz backwards.
- `frost`: ice creeping over glass, close, tiny cracks.
- `hearth`: a big fire in a stone hall, a crowd talking, glasses.
- `steam`: steam pipes knocking and hissing in walls.
- `door-heavy`: a very heavy door shutting far away.
- `wind-north`: a cold wind, high, empty.
- `chip`: a small chisel on ice, slow.
- `beat`: Hans's techno beat, muffled, as if through ice.
- `heartbeat-two`, `heartbeat-one`, `silence`, `rewind`, `drip`: as in "The Eleven Paces".

*Hubs.* E0 offers three past visions and F0 three futures, any order, greyed once done; when all three are done, E0 goes on to S1 and F0 goes on to W1. Each vision ends with "Back".

*Fight @frost.* Win goes to W3, loss goes to W3x. Stat blocks below.

*Paintings.* (1) the great house new, a glass roof, steam, warm light, a woman engineer setting a construct's face; (2) a long dining hall, guests in grey travel cloaks, a construct pouring wine, one young guest asking it to dance; (3) the house half empty, dust sheets on chairs, a construct lighting lamps for nobody; (4) a very tall cloaked guest at the door at night, snow starting, a construct holding a lamp; (5) a construct frozen in ice at a door, holding a lamp, frost over everything; (6) a small inn of its own years on, room doors with names, nobody there; (7) a wake in a tavern, old people and one construct with headphones; (8) a door of fire in a dark place, a construct stepping toward it; (9) the last Hans, frost on his face plate, standing alone by a door in the ash.

**Fight: The Frost.** Hans alone (AC 17, HP 60). The cave floor has gone white with frost; the lamp burns blue. The last Hans stands between Hans and the tunnel. He doesn't want to destroy Hans. He wants to freeze him again, so he sleeps through what's coming and doesn't have to watch it.
- *The last Hans.* Medium construct. AC 16, HP 45, speed 30. Immune to cold, poison, psychic, charmed and frightened. Initiative +0. One Rime Slam a turn (two when the flicker is 1 or less). *Rime Slam:* +6 to hit, 2d6+2 cold.
- *Frozen Guest* (two; three at dread 3+). Medium undead, a guest from the old house in a skin of ice. AC 11, HP 11, speed 30. *Cold Hands:* +4 to hit, 1d6+1 cold.
- *The box:* the black box in Hans's chest keeps him warm (4). At the end of each round it loses a degree for every Frozen Guest standing next to Hans. At 0 he freezes and the fight is lost. *Turn it up* (bonus action): he plays his beat through the stones and the box warms a degree (once a round).
- Hans's own tools all apply: two Slams a turn, Bodyguard, The Drop.
- The last Hans at 0 HP: win, go to W3. Hans at 0 HP or the box at 0: no game over; he goes still under the frost for a moment, go to W3x. Both lead to the same last choice. Tested in the fight simulator: a careful player (keeps the box turned up, clears the guests next to him first) wins about 18 in 20.

---

## H1. A flake

You are standing by the tunnel. That's your post tonight. You picked it. Nobody comes in past you.

You don't breathe, so the ash doesn't bother you. It's been coming down all day. You have counted four thousand and eleven flakes on your left sleeve. You stopped counting on your right sleeve because it was the same.

Six in the cave, seven with the old man. Nobody has asked you for anything in an hour. You keep checking.

The black box sits in your chest, behind the plate. It's warm. It has been warm since the ship.

One flake comes down past your face and lands on the seam of your chest plate. Right over the box.

{sound: frost}

The box goes cold.

All at once. A draught goes through your chest where there has never been a draught.

Your sound stones are playing. You didn't tell them to. It isn't your beat. It's slow and old, three to a bar, a music box and strings, slightly out of tune.

{sound: waltz}

You don't have this on file. You have everything on file.

You check. Your inside temperature has dropped one degree.

→ Continue (go to H2)

## H2. Held

The ash stops.

It hangs in the lamplight. Katy's hand is halfway to her father's. Stig is half up. Saphira's hood has moved a little, and stays moved.

Nobody's moving. You can move. You don't want to, much.

There's frost on your fingers. A fine white fur of it, in the joints. You have not had frost on your fingers since

You stop. There's no end to that thought on file. There is a gap where it should be. The gap is cold.

~Welcome.~

That's your voice. You didn't say it.

→ Continue (go to H3)

## H3. Cold

You look down at your hands. The frost is spreading up the backs of them, slowly, the way it goes up a window.

Your face plate creaks. You know that sound. You heard it for a long time. You don't know when.

The waltz goes on. Under it, so far down you could be making it up, there's a fire. A big one, in a stone room, and people talking over it.

{sound: hearth}

The cave goes thin. Behind it there's light, gold, with steam in it.

~Room kept.~

Things you put away a long time ago are coming back out, one at a time.

→ Let it open. (go to E0)

## E0. What the house remembers

You're in a doorway. Your doorway. You know the weight of it before you see it: oak and brass, warm to the touch, the floor under it warm too.

Behind you the cave. In front of you, a corridor of doors. Each one opens on a room you've stood in. All of them are in the same house.

You can feel your feet on the floor in every one of them. You never moved much. You were built to stand in one place and be useful.

Three of them are close enough to walk into.

→ A glass roof, and a woman with a screwdriver. (go to P1a)
→ A long table, and guests in grey. (go to P2a)
→ Dust sheets. (go to P3a)

*Hub: then go to S1*

## P1a. A face {past}

{sound: steam}

A workshop under a glass roof. The glass is new and so clean it isn't there, and the sky through it is very blue. Steam pipes run along every wall, knocking.

You're sitting on a stool. You can't move yet. Your eyes work. That's all that works.

A woman is sitting in front of you with a tray of small tools. She's got grey in her hair and soot on one cheek and a pencil behind her ear. She's doing your face.

She does it slowly. A little here. Step back. Look. A little there.

"No," she says, to your mouth. "Too pleased with itself."

She fixes it.

"There. You look like someone who'll still be up when people get in late."

You can't answer. You don't have a voice yet. You remember wanting one, very badly, for the first time.

[SAM?: the house when it was new, and the woman who made Hans's face]

→ Let her finish the face. (go to P1b) -flicker
→ Look at what's on the bench beside her. (go to P1c) +dread

## P1b. Finished {past}

You let her work.

It takes the whole afternoon. The sun goes across the glass roof. She hums while she does it. It's the waltz. She's out of tune in the same places the music box is.

At the end she sits back and looks at you for a long time.

"Right," she says. "Last thing."

She takes two smooth blue stones on a band of brass and puts them over your ears.

Sound comes in. All of it at once. The steam, her breathing, a gull on the glass, her heart.

"So you never have to stand in a quiet room," she says. "You'd hate it. Trust me. I'd know."

You still can't talk. You wanted to say thank you. You didn't have the mouth for it yet. By the time you did, she was busy.

→ Back (go to E0)

## P1c. The bench {past}

You look past her, at the bench.

There's another face on it. Finished. Lovely work. Calm. It isn't yours.

Beside it a long list, in her writing, in Old Valerian. You can read it now. You couldn't then.

*Steward class. Warden class. Host.*

There's a line through *Warden class*. A line through *Steward class*. *Host* is underlined twice.

She sees you looking. She can't know you're looking. You aren't switched on.

"Not you," she says, to the face on the bench. "You'd be wasted on it." She turns it face down. "You," she says, to you, "are going to look after people. The other kind of work, somebody else can do."

?dread>=3: There's frost on the bench in the memory, where there wasn't any. She doesn't notice it.

→ Back (go to E0)

## P2a. The long table {past}

{sound: hearth}

The dining hall. Long as a ship. A fire at the end you could stand up in. The floor is warm right through your feet, warm from underneath, always.

Every seat is taken. Every guest is in grey travelling clothes. Good boots. Packs by the wall.

You are pouring. You pour well. You remember being proud of pouring well.

They're happy. Louder than people are at dinner. Toasting each other, singing, telling the stories you tell when you won't see someone again. Old ones and young ones. A man with a beard to his belt. Two women who keep holding hands under the table.

They stay one night. They always stay one night. You've done this every night for years.

In the morning they walk out of the front door and go north, and they don't come back. You wave from the step. You always wave. Nobody told you to.

[SAM?: the guests who stayed one night and walked north in the morning]

→ The girl at the end of the table is asking you for something. (go to P2c) +flicker
→ Ask the bearded man where they're going. (go to P2d) +dread

## P2c. A dance {past}

{sound: waltz}

She's young. Too young for the boots. She stands up when you come with the jug and says, "Do you dance?"

You don't know. Nobody's asked.

She takes the jug off you and puts it on the table and puts your hand on her back.

You dance. The waltz, from the music box on the mantel. You're bad at it for one bar and then you're perfect at it, because you've watched it a thousand times and remembered every step.

She laughs. The whole table claps in time.

"There," she says. "Now you've got something to keep."

You kept it. You've got it now, every step, every clap. You have played it to yourself in the dark more times than you've played anything.

In the morning she went north with the rest.

→ Back (go to E0)

## P2d. North {past}

You lean down to the bearded man while you pour. You aren't supposed to ask. You ask.

"Where are you all going?"

He looks at you like you're a child who's asked where the sun goes.

"To keep the watch," he says. "Somebody has to." [SAM?]

"How long is the watch?"

He drinks.

"Long," he says. "That's why we eat well first." He holds his glass out for more. "You'd make a good one. You don't get tired. But you need wanting to, and they built you not to want things." He pats your arm. "Shame. Pour."

You pour.

?dread>=3: ^^Somebody has to. Somebody has to. Somebody has to.^^

→ Back (go to E0)

## P3a. Dust sheets {past}

{sound: door-heavy}

The same hall. Years on. You can tell by the dust.

Half the chairs have sheets over them. The fire at the end is small. The guests come once a month now, then less. Fewer each time. Some nights one.

The staff go first. The cook leaves a note. The two girls who did the rooms leave together and don't leave a note.

The woman who made your face comes down the stairs with a bag. She's old now. She's still got a pencil behind her ear.

"There's a ship," she says. "They're taking the last of us up. I'll be back in the spring. Keep it warm."

You can't go. You're part of the building. Your feet are in the floor. That's not a way of putting it. They are.

[SAM?: the house emptying, and the woman leaving on a ship "until the spring"]

→ Ask her to stay. (go to P3c) +dread
→ Light the lamps, all of them, for nobody. (go to P3d) -flicker

## P3c. Stay {past}

You've got a voice by now. You use it.

"Stay."

She stops on the bottom stair. She puts the bag down.

For a moment you think she's going to.

"I can't keep the fire under the floors going," she says. "Nobody can, any more." She picks the bag up again. "When it goes out, it'll get cold. You'll be fine. You'll sleep. I built you to."

She puts her hand on your face. The one she made.

"Spring," she says.

It was not spring.

→ Back (go to E0)

## P3d. Lamps {past}

You light them. All of them. Every lamp in every room, the corridors, the big hall, the stairs. It takes all night.

The house is lit from top to bottom. From outside, from the north, it must look like a party.

Nobody comes.

You stand in the doorway with the last lamp in your hand and wait in case somebody saw it from a long way off and is walking.

?seen P2c: You play the waltz on your stones while you wait. Quietly. In case.

You find that you have been doing this, more or less, ever since.

At the far window someone your height holds a lamp up too. When you lower yours, he doesn't.

→ Back (go to E0)

## S1. The last guest {past}

{sound: wind-north}

Night. Snow starting. The house is dark except the hall, and you, in the door, with your lamp.

Someone's coming up the steps.

Tall. Taller than you, and you are tall. You notice that. You don't like it. It's wrapped in a travelling cloak, grey, like they all were, and it gives off heat like a stove. The snow goes to water before it touches it.

It stops on the step.

"One night," it says. Its voice is low and very tired. "Then north."

"Certainly," you say. "Welcome."

You give it the best room. You make up the fire. It doesn't eat. It sits by the fire all night and doesn't sleep and doesn't ask for a song. Toward morning it asks you one thing.

"Will you keep the room? In case I need it after."

"Certainly."

It goes out at dawn and walks north, and you wave from the step.

That night the floor goes cold under your feet.

It has never been cold. Not once since you were made. You stand in the door with the lamp and feel it go out under the whole house, room by room, the far rooms first.

{sound: frost}

The frost comes in under the door. It climbs your boots. It climbs you.

You don't move. You're keeping the room.

[SAM?: the last guest, and the night the cold came over the house. It says nothing about where the guests went]

→ Continue (go to S2)

## S2. Thaw

{sound: chip}

White. Blue-white, and very close, and everywhere.

You're in ice. You've been in ice a long time. You don't know how long. Your clock stopped at "Room kept" and stayed there.

Something taps the ice, by your face. Tap. Tap. A small chisel, patient.

A crack opens. Air comes in. Warm air, with smoke in it and cheap ale.

A woman's face, close, frowning at you through the hole. Hard eyes. Quick hands.

"Well, look at you," she says. "Aren't you worth something."

It's Gerda.

You've got one word ready. It's been ready the whole time. You say it.

"Welcome."

She laughs. It isn't a nice laugh, but it's the first anybody's laughed near you in a long time, and you file it under good.

[SAM?: Gerda chipping Hans out of the ice]

→ Continue (go to L1)

## L1. Again {again}

{sound: rewind}

You are standing by the tunnel.

The ash goes up. Off your sleeves, off everyone, up into the dark, dry, like it was never down.

{sound: waltz-back}

The waltz runs backwards on your stones. It's worse backwards. The out-of-tune notes come first.

The frost on your hands goes back down into the joints. You warm a degree. Then you lose it again, the other way.

Katy takes her hand back from her father's. Stig sits down. Saphira's hood moves the wrong way.

Gerda puts the chisel back in her belt and walks away from the ice.

The woman with the pencil walks backwards up the stairs with her bag.

The girl puts the jug back in your hand.

~Room kept. Room kept.~

You have a terrible feeling that if you let it, this would go round for ever and you'd like it.

→ Let it play out. (go to F0)

## F0. Ahead

{sound: frost}

The house goes. The cave comes back and goes too.

Now it's doors again, but these ones you've never stood in. Every one is frosted over, with light behind it.

These haven't happened. They might not. You'll be around for most of them, if they do.

~Don't get attached.~

Three of them are close enough to walk into.

→ A small house of your own. (go to Q1a)
→ A wake. (go to Q2a)
→ A door with fire in it. (go to Q3a)

*Hub: then go to W1*

## Q1a. Your own house {future}

{sound: steam}

An inn. Small. Yours. You can tell it's yours because the sign is very well painted and there's a pair of headphones on it.

It's spotless. You've done the floors.

Every room has a name on the door, in brass. *Katy. Stig. Saphira. Thorn.* One with a little bird on it.

The rooms are made up. Clean sheets. Fresh water in the jugs.

It's very quiet.

You, the you who lives here, are behind the bar, polishing a glass that is already clean. You are older. You don't look it. That's the trouble. Your face is the same face. There's more frost on the backs of your hands.

The door opens. The you behind the bar looks up so fast the glass nearly goes.

It's the wind.

Out by the back door, in the frost, a big shape stands with one hand up.

→ Go and open all the windows. Let some noise in. (go to Q1c) +flicker
→ Help him with the glasses. (go to Q1d) +dread -flicker

## Q1c. Noise {future}

You go round and open every window. It's market day outside. Somebody's selling fish badly. A dog. Children.

The you behind the bar watches you do it like you've broken something.

Then he turns his stones up. Your beat, low.

A child sticks her head in the door, because of the beat.

"Are you open?"

"Yes," says the you behind the bar. His voice cracks. "Yes. Come in. Welcome."

→ Back (go to F0)

## Q1d. Glasses {future}

You get a cloth and help.

You do every glass. He does them again after you. You don't mind. You'd do the same.

Behind the bar, under the counter, there's a box. Inside it: a bronze ukulele with no strings. A towel with blue stripes, folded small. A dagger with the edge gone. A falcon feather, blue at the quill.

He sees you looking.

"They're keeping," he says. "That's all. I'm keeping them."

~Room kept.~

→ Back (go to F0)

## Q2a. A wake {future}

{sound: hearth}

A tavern, full. Warm. Everybody's in their best clothes and their best clothes are old.

Everybody's old. Grey hair, sticks, a lot of grandchildren running about under the tables.

Except you. You're in the corner, behind a little table with your stones on and two boxes that make the beat. Same face. Not one day.

You're playing. You've played every one of these. Weddings, name-days, and now this.

Nobody says whose wake it is. There's a chair at the front with nobody in it and a cup in front of it.

People keep coming up to you. "Play the one from the bridge." "Play the one she used to hum."

You have all of them. You have every song anybody in this room ever asked for.

By the coats, someone with frost on his shoulders waits to be asked for a song.

→ Play the one they ask for. (go to Q2c) +flicker
→ Stop playing, and go and sit in the chair at the front. (go to Q2d) +dread

## Q2c. The one they ask for {future}

You play it.

An old woman at the front starts to sing. Then everyone. They sing it wrong. Different words, the words they learned as children.

The you in the corner doesn't correct them. He turns the music down so their voices are on top.

Someone's grandson, about six, climbs up next to the boxes and asks, "How old are you?"

"Three hundred and seventy-one," says the you in the corner.

"Are you sad?"

He thinks about it properly. You can see him check.

"Yes," he says. "I've checked."

→ Back (go to F0)

## Q2d. The chair {future}

You stop the music. The room goes on talking.

You go to the front and sit in the empty chair.

It's the wrong height. It's someone's chair. You can feel the shape of whoever it was in the cushion.

The cup in front of it is still warm. Somebody filled it this morning out of habit.

The room doesn't notice you've stopped. You're a box in the corner.

~Don't get attached. They go north. They always go north.~

→ Back (go to F0)

## Q3a. A door {future}

{sound: wind-north}

Dark. Ash coming down, the way it is in the cave.

There's a doorway. Stone. Full of fire, and the fire doesn't move.

The crew is in front of it. Katy, older. Stig. Saphira. They're looking at it like it's a bill nobody can pay.

You're there too. The you who's there has his chest plate open. There's nothing in it. The box is gone. [SAM?]

He's standing closest to the door. Closer than any of them.

"I don't get tired," he's saying. "You said it yourself. Every one of you. Hans doesn't get tired."

Nobody's answering him.

→ Step between him and the door. (go to Q3c) +flicker
→ Let him talk. He might be right. (go to Q3d) +dread -flicker

## Q3c. Between {future}

You step in front of him. He's exactly as heavy as you. Neither of you goes anywhere.

"Move," he says.

"No."

Katy laughs, behind you, a wet sort of laugh.

"Two of him," she says. "Help us all."

Stig puts his hand on your shoulder. Then on his. He doesn't say anything.

The fire in the doorway doesn't move. It'll wait.

→ Back (go to F0)

## Q3d. He might be right {future}

You let him talk.

"I was built to stand in a door," he says. "Look at me. It's the only thing I've ever been for."

He takes a step. The fire lights up the empty space in his chest.

Saphira says something you don't hear.

He takes another step.

You think, for one second, that he's right, and that it would be all right. And then you think about the room with *Katy* on the door, and the clean sheets, and the wind.

~Don't. You'll miss them. You'll miss them for ever.~

→ Back (go to F0)

## W1. The last degree

{sound: frost}

The doors go. The cave comes back, but wrong. White. The frost has come up the walls and over the floor. The lamp is burning blue.

You're one degree above freezing. You can feel it in your knees first.

There's someone between you and the tunnel. Your post. Standing where you were standing.

Big. Your height. Your shoulders. Frost on him, thick, like he's been out all night. He's got one hand up and closed, like there's a lamp in it. There isn't.

He has his back to you.

?flicker>=3: You can see the tunnel through him. He's thin as breath on glass.

?flicker<=1: He's solid. The frost under his boots is packed hard.

~Welcome.~

→ Put your hand on his shoulder. (go to W2 if dread<4 / W2x)

## W2. The face

{sound: heartbeat-two}

He turns round.

It's you. The face she made. Same mouth, the one that was too pleased with itself and then wasn't.

A long time more on it. Frost in the seams. The paint gone off the lips. One crack across the plate, from the left eye down to the jaw, filled with ice.

His stones are on. Nothing's coming out of them.

@future: "Welcome," he says. Then he hears himself and stops.

"Who are you?"

@future: "Last one up." He looks at the cave. At the crew, stuck in the air. "They all go. Every one. You know that. You've done it before."

"I don't remember that."

@future: "You will."

He holds out his closed hand, the empty one that's holding a lamp.

@future: "It doesn't hurt in the ice. I've checked. You stand, and it's quiet, and you don't have to watch."

"Watch what?"

@future: "Them going north."

He looks at you for a long time. It's very strange to be looked at by your own face like that. Kindly.

@future: "Go back to sleep," he says. Two voices at once, and they're both yours, and they don't say the same thing. "Go back to sleep. / Don't you dare."

He puts his cold hand flat on your chest plate, over the box, and the frost starts to come through.

→ Push his hand off. (go to @frost)

## W2x. The face, and the guests

{sound: heartbeat-two}

He turns round. It's you. Frost in the seams, the crack full of ice.

@future: "Welcome."

And then the guests come. Up out of the frost on the floor, in their grey travelling clothes, in skins of clear ice. The bearded man. The two women holding hands. The girl.

?seen P2c: She still has her hand up, like she's asking for a dance.

?seen P2d: The bearded man raises a glass of ice to you.

?seen P3d: Every one of them is carrying a lamp you lit.

?seen Q1d: One of them has a towel with blue stripes over his arm.

?seen Q2d: One of them is carrying a chair.

?dread>=4: All of them. Every guest you ever waved off. They want you to come and stand with them.

@future: "See? We're all here. It's quiet."

He puts his hand on your chest. The guests put theirs on your arms.

→ Push them off. (go to @frost)

## W3. Warm

{sound: heartbeat-one}

He goes down on one knee. The frost under it cracks like a plate.

?flicker>=3: He's hardly there. A shape of frost on the air.

?flicker<=1: He's solid. Heavy. The ice under his knee has cracked.

The guests have stopped. They're standing about the cave, waiting for the music to come back on.

The box in your chest is warm again. Just. One degree. You've never been so pleased about one degree.

He looks up at you. Your face.

@future: "You always were stubborn about the door."

The crew are still stuck in the air. Katy, Stig, Saphira, Thorn. Ash hanging over all of them.

You've got one degree. You know, the way you know things in dreams, that what you do with it is going to stay done.

→ Keep all of it. Every room, every guest, for as long as you last. (go to End 1)
→ Turn your stones off, and let the waltz stop. (go to End 2)
→ Play it for them. Out loud. Here. (go to End 3)

## W3x. Frozen

The frost comes over your eyes.

It's not dark. It's white. And quiet. He was right. It doesn't hurt.

You don't know how long. It might be a second. It might be another long sleep. Your clock says "Room kept".

Then something knocks on your chest plate. From the inside.

Beep. Beep. Beep. Beep. Four notes. A, D, F, E.

The box. Warm. Warm the way it was when you took it out of the ship.

The frost cracks off your face in a sheet.

He's kneeling in front of you, the last one up, with his hand still on your chest.

@future: "Huh," he says. "That's not ours."

You've got one degree.

→ Keep all of it. Every room, every guest, for as long as you last. (go to End 1)
→ Turn your stones off, and let the waltz stop. (go to End 2)
→ Play it for them. Out loud. Here. (go to End 3)

---

## End 1. Room Kept

You keep it.

All of it. The glass roof, the pencil behind her ear, the girl and the dance, the bearded man, the lamps, the last guest's heat on the step. Gerda's chisel. You put it back on file. On the shelf this time, lid off, where you can reach it.

It's heavy. You stand a bit differently with it.

He watches you do it, on his knee.

@future: "That's a lot to carry," he says.

"I know."

@future: "And you'll keep them too." He nods at the crew, stuck in the air. "Every one. Every word."

"Yes."

He looks at you for a long time. Then he gets up, with a creak you know very well, and walks off into the frost, and opens his closed hand. There was a lamp in it after all. It's lit.

Far off in the ash, where he's going, there's a doorway with fire in it that doesn't move. He walks up to it and stands beside it, holding the lamp up.

{sound: waltz}

Your inside temperature reads eleven degrees. The cave's back.

You're standing by the tunnel. The box in your chest is warm.

Katy looks round at you, for no reason.

"You all right, Hans?"

"I have filed something," you say. "It was large."

> **Echo: Room Kept.** Before you roll an Intelligence (History) or Intelligence (Investigation) check about something old, or about something a person has said before, you can spend this Echo to have advantage on it.

**Sent to Sam:** [what the frost showed him, see below] At the end: he kept every memory on the shelf, all three hundred years of them. Hans logged: I have put back everything I put away. I did not know there was so much. I have made room. There is always room. That was my job.

## End 2. Quiet Room

You put your hand up to your stones and turn them off.

The waltz stops.

It's the first time since the workshop that you have heard nothing at all. She was right. You'd hate it. You do, a bit.

He watches you from his knee. His stones go dark too.

@future: "Oh," he says. "That's allowed?"

"I just did it."

He laughs. You didn't know your face could do that from the outside. It's a terrible laugh.

The frost comes off him in flakes, like paint. Under it, his face plate is clean. The crack's still there. He touches it.

@future: "Keep that," he says. "The quiet. When it's too much, turn it off for a bit. Then turn it on again. That's all. Nobody told me."

He gets up and walks off into the cave and doesn't look back. Far off behind him there's a doorway with fire in it that doesn't move. He walks with his back to it.

{sound: silence}

Your inside temperature reads eleven degrees. The cave's back.

You stand by the tunnel with your stones off. You can hear Stig breathing. Katy's knee on the stone. A drip somewhere. Thorn shifting his weight.

After a while you turn the stones back on. Low.

> **Echo: Quiet Room.** Before you make a Wisdom saving throw, or a Wisdom (Perception) check to hear something, you can spend this Echo to have advantage on it.

**Sent to Sam:** [what the frost showed him] At the end: he turned his sound stones off, and the waltz stopped, and he stood in a quiet room on purpose. Then he turned them back on. Hans logged: I have learned that there is an off. I have used it for four minutes. That is enough for now.

## End 3. Open House

You turn your stones up. All the way. And then you do the thing you've never done.

You let it out. Out loud. Through your chest plate, through the box, through the cave. The waltz.

The guests in the frost turn round.

The ash hangs. The crew are stuck in the air. But in the dream, very faint, Katy's foot starts tapping. Then Stig's head, just slightly, side to side, three to a bar. Saphira doesn't move. Her boot does, a little.

He stares at you from his knee.

@future: "They can hear it?"

"I don't know," you say. "I never asked them."

The girl in the ice puts her hand out. You take it. You know the steps. You have every one of them.

You dance the girl round the cave once, and the guests clap in time, and the frost goes off them as they clap and they're just people in grey travelling clothes, smiling, and then they're not there at all.

He's watching from his knee. Then he gets up and holds his closed hand out to the next one. The bearded man. They dance badly.

@future: "I never asked anyone to dance," he says, going past. "They always asked me."

Then he's gone too. Far ahead of him in the ash there's a doorway full of fire that doesn't move. Somebody is standing by it. Somebody big, with a towel over one knee. He's tapping his foot.

{sound: waltz}

Your inside temperature reads eleven degrees. The cave's back.

You're standing by the tunnel. Very still. Your stones are on.

Katy's foot is tapping. She's looking at it like it belongs to someone else.

"Hans," Stig says. "Were you humming?"

"No," you say. You were waltzing. He didn't ask that.

> **Echo: Open House.** When you take the Help action, or use Bodyguard to protect someone, you can spend this Echo: that creature also gains 2d6 temporary hit points.

**Sent to Sam:** [what the frost showed him] At the end: he played the waltz out loud, through the box, to the whole cave, and danced the guests out of the ice. Hans logged: I have played a record I was keeping for myself to some other people. I did not know if I was allowed. Nobody said no. Katy's foot tapped. I have checked twice.

## What the frost showed him (first lines of every "Sent to Sam", one per passage reached)

- **The face, finished (P1b):** Hans logged: I remember the woman who made my face. She gave me my stones so I would never have to stand in a quiet room. I did not say thank you. I could not yet. [SAM?]
- **The face, the bench (P1c):** Hans logged: there was a list on her bench. Steward class. Warden class. Host. She crossed two out. I am the third. [SAM?]
- **The long table, a dance (P2c):** Hans logged: a guest asked me to dance, the night before she went north. I kept every step. [SAM?]
- **The long table, north (P2d):** Hans logged: I asked a guest where they were all going. He said to keep the watch, and that I would be good at it, but I was built not to want to. [SAM?]
- **Dust sheets, stay (P3c):** Hans logged: I asked her to stay. She said she would be back in the spring. It was not spring. [SAM?]
- **Dust sheets, lamps (P3d):** Hans logged: I lit every lamp in the house for nobody, in case somebody saw them from a long way off. [SAM?]
- **The last guest (S1):** Hans logged: the last guest was taller than me and as warm as a stove. It asked me to keep its room. That night the floors went cold and the frost came up. I kept the room. [SAM?]
- **Thaw (S2):** Hans logged: Gerda chipped me out of the ice. I said "Welcome." She laughed. I filed it under good. [SAM?]
- **The loop (L1):** Hans logged: for a moment the waltz went backwards, and I liked it, and that worried me.
- **Your own house, noise (Q1c):** Hans logged: in a house that does not exist yet, I had my own inn, and a room for each of you, and nobody came. I opened the windows. A child came in because of the beat.
- **Your own house, glasses (Q1d):** Hans logged: in a house that does not exist yet, I keep a box under the bar. I have not said what is in it. I know what is in it.
- **A wake, the song (Q2c):** Hans logged: at a wake that has not happened, I played what they asked for, and told a child I was sad, and that it was allowed.
- **A wake, the chair (Q2d):** Hans logged: at a wake that has not happened, I sat in the empty chair. It was the wrong height.
- **A door, between (Q3c):** Hans logged: I saw a door with fire in it, and myself walking to it. I stood in my own way. Stig put a hand on both of us.
- **A door, let him talk (Q3d):** Hans logged: I saw a door with fire in it, and myself walking to it, and for one second I thought it would be all right.
- **Went down in the fight (W3x):** Hans logged: in the fight I froze again. It did not hurt. Then the box in my chest beeped four notes and I came back.

**Never sent:** where the guests went, what the watch was, who the last guest was, who the woman with the pencil was, what the house was called, or what the last Hans saw at the door.

## Whispers (the last Hans's voice, scattered by the game as the dread grows)

- Welcome.
- Room kept.
- Don't get attached.
- They go north. They always go north.
- It doesn't hurt in the ice.
- Go back to sleep.
- Don't you dare.
- Spring.
- Keep it warm.
- You'll miss them for ever.
- Last one up.
- Welcome.

## Cutscene: frost

- The cave, gone still. Ash hangs in the lamplight.
- One flake drifts down past your face.
- It lands on the seam of your chest plate, right over the box.
- Frost runs out across your fingers, fine and white.
- Your stones play a waltz you don't have on file.
- @future: Welcome.
- Thaw

## Cutscene: face

- White frost over the floor. The lamp burns blue.
- A broad back, your height, between you and the tunnel.
- You put your hand on his shoulder.
- He turns round.
- Your face, three hundred years on. A crack full of ice.
- @future: Go back to sleep.
- @future: Go back to sleep. / Don't you dare.
- His cold hand on your chest, over the box.

## Cutscene: end 1

- You put it all back on the shelf. All three hundred years.
- He watches from his knee.
- @future: That's a lot to carry.
- He opens his hand. There was a lamp in it after all.
- He walks off toward a doorway of fire.
- Hans: Filed.

## Cutscene: end 2

- You turn your stones off. The waltz stops.
- Nothing. For the first time since the workshop.
- @future: That's allowed?
- He laughs. The frost goes off him like breath off a window.
- He walks away from the fire, and doesn't look back.

## Cutscene: end 3

- You turn the stones up, all the way, and let it out.
- The guests in the frost turn round.
- You take the girl's hand. You know every step.
- The guests clap in time, and the ice goes off them.
- @future: I never asked anyone to dance.
- Far ahead, by a doorway of fire, somebody is tapping his foot.
- Hans: Welcome.
