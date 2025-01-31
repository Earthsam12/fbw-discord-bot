import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed, makeLines } from '../../lib/embed';

export const takeoffPerf: CommandDefinition = {
    name: ['takeoff', 'calculator', 'perf'],
    description: 'Provides an explanation as to why there is no takeoff calculator for V-speeds or FLEX.',
    category: CommandCategory.A32NX,
    executor: async (msg) => {
        const takeoffPerfEmbed = makeEmbed({
            title: 'FlyByWire A32NX | Where is the takeoff calculator?',
            description: makeLines(['Currently, Airbus does not publicly release takeoff performance data for the A320neo, which means it is difficult to create an accurate takeoff calculator.',
                '',
                'While there are many online calculators available, these often use A320ceo data, and are not accurate.' ,
                '',
                'This unfortunately means that we cannot provide a reliable and accurate takeoff performance calculator at this time.']),
        });

        await msg.channel.send({ embeds: [takeoffPerfEmbed] });

    },
};
