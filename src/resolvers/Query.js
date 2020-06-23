async function feed(parent, args, context, info) {
    const where = args.filter ? {
        OR: [
            { description_contains: args.filter },
            { url_contains: args.filter },
        ],
    } : {}

    const links = await context.prisma.links({
        where
    })
    return links
}

function info(){
    return `This is the API of Hackernews clone.`;
}

module.exports={
    feed,
    info
}





